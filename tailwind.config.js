module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        autotheme: {
          primary: "#f4f4f4",
          secondary: "#212121",
          accent: "#FDBA55",
          neutral: "#9a9a9a",
          "base-100": "#ffffff",
          "error":"#f1f1f1"
        },
      },
      "dark",
      "cupcake",
    ],
  },
  
  plugins: [require("daisyui")],
}
