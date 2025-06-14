const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

// 🚀 Custom Calculate API
app.post('/api/calculate', (req, res) => {
  const { operation, num1, num2 } = req.body;

  if (
    typeof num1 !== 'number' ||
    typeof num2 !== 'number' ||
    !['add', 'subtract'].includes(operation)
  ) {
    return res.status(400).json({
      status: 400,
      error: 'Invalid input: Expect { operation: "add" | "subtract", num1: number, num2: number }',
    });
  }

  const result = operation === 'add' ? num1 + num2 : num1 - num2;
  res.json({
    status: 200,
    message: 'Calculation successful',
    result,
  });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
