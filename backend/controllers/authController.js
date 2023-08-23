const express = require('express');
const authController = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


//register
authController.post('/register', async (req, res) => {
    try {
      const isExisting = await User.findOne({ email: req.body.email });
      if (isExisting) {
        return res.status(400).json({ error: 'Account already exists' });
      }
  
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
  
      const newUser = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
      });
  
      const token = jwt.sign(
        { id: newUser._id, isAdmin: newUser.isAdmin },
        process.env.JWT_SECRET,
        { expiresIn: '10d' }
      );
  
      const { password, ...userWithoutPassword } = newUser._doc;
  
      return res.status(201).json({ user: userWithoutPassword, token });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
  

//login

module.exports = authController;