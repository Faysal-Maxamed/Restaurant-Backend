import Users from "../models/userModel.js";

export const getUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    res.status(200).json(user);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Users.findOne({ email });
    if (user) {
      if (user.password === password) {
        res.status(200).json({
          id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,  // Automatically include the role from the database
        });
      } else {
        res.status(400).json({ message: "Wrong password" });
      }
    } else {
      res.status(400).json({ message: "User not found" });
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};


export const createUser = async (req, res) => {
  try {
    const { name, email, password, phone, address, isAdmin } = req.body;

    const isUserExists = await Users.findOne({ email });

    if (isUserExists) {
      res.status(400).json({ message: "User already exists" });
    } else {
      const user = await Users.create({
        name,
        email,
        password,
        phone,
        address,
        isAdmin: isAdmin ?? false,  // Default to false if not provided
      });

      res.status(201).json(user);
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};


export const UpdateUser = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;

    const user = await Users.findById(req.params.id);

    if (user) {
      user.name = name;
      user.email = email;
      user.password = password;
      user.phone = phone;
      user.address = address;

      const updatedUsers = await user.save();

      res.status(200).json(updatedUsers);
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
