const confirmEmail = async (req, res) => {
  const { token } = req.params;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByPk(decoded.id);
    user.confirmed = true;
    await user.save();
    res.status(200).json({ message: "Email confirmed." });
  } catch (error) {
    res.status(400).json({ error: "Invalid or expired token." });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user || !(await user.validPassword(password))) {
      return res.status(401).json({ error: "Invalid email or password." });
    }
    if (!user.confirmed) {
      return res
        .status(401)
        .json({ error: "Please confirm your email first." });
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(400).json({ error: "User not found." });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    await PasswordReset.create({
      email: user.email,
      token,
      expires: new Date(Date.now() + 3600000),
    }); // 1 hour

    sendEmail(
      user.email,
      "Reset Password",
      `Click to reset password: ${req.protocol}://${req.get(
        "host"
      )}/auth/reset-password/${token}`
    );
    res.status(200).json({ message: "Password reset email sent." });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const resetPassword = async (req, res) => {
  const { token, password } = req.body;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByPk(decoded.id);
    user.password = await bcrypt.hash(password, 10);
    await user.save();

    res.status(200).json({ message: "Password reset successfully." });
  } catch (error) {
    res.status(400).json({ error: "Invalid or expired token." });
  }
};

const sendOtp = async (req, res) => {
  const { email } = req.body;
  try {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    await Otp.create({
      email,
      token: otp,
      expires: new Date(Date.now() + 600000),
    }); // 10 minutes
    sendEmail(email, "OTP", `Your OTP is: ${otp}`);
    res.status(200).json({ message: "OTP sent to email." });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const verifyOtp = async (req, res) => {
  try {
    const { email, token } = req.body;
    const otp = await Otp.findOne({ where: { email, token } });

    if (!otp || otp.expires < Date.now()) {
      return res.status(400).json({ error: "Invalid or expired OTP" });
    }

    // OTP verified
    await Otp.destroy({ where: { email, token } });
    res.json({ message: "OTP verified" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
