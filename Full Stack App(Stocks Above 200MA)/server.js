const express = require('express')
const app = express()
const path = require('path')
const PORT = 3000;

const above200 = {
  "Tech": {
    "CAPR": {
      "Name": "CAPRICOR THERAPEUTICS",
      "Price": "5.05"
    },
    "CTIC": {
      "Name": "CTI BIOPHARMA",
      "Price": "9.09"
    }
  },
  "Consumer Services": {
    "CREX": {
      "Name": "CREATIVE REALITIES",
      "Price": "3.15"
    },
    "BKNG": {
      "Name": "BOOKING HOLDINGS",
      "Price": "2623.93"
    }
  },
  "unknown": {
    "Unknown": {
      "Name": "Unknown",
      "Price": "Unknown"
    }
  }
}

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile(__dirname, 'public','/index.html') 
})

app.get('/api', (req, res) => {
  // //Whatever is selected, 
  
  //search that in the above 200 object.
  const sector = req.query.sector;

  if (sector && above200.hasOwnProperty(sector)) {
    res.json(above200[sector])
  } else res.json(above200.unknown) 
})

app.listen(PORT, () => {
  console.log(`Server is at Port: ${PORT}!`)
})