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
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  
  plugins: [require("daisyui")],
}
