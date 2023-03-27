import axios from "axios"

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer KaYAZhz7ARMVfvfocowqvAOvbQiiqMI2-Krvdg7vy7N3w-vosV_wRLeHQ0Feo0GMFU4GObB7QxkkDJhsyJjNiH3sqT-pyb2B6DHeWRzdjCCQm0jW70DwqrRs4XQQZHYx",
  },
})
