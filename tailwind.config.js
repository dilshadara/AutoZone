module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        autotheme: {
          primary: "#F4F4F4",
          secondary: "#212121",
          accent: "#FDBA55",
          neutral: "#9a9a9a",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  
  plugins: [require("daisyui")],
}
