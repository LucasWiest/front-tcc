module.exports = {
    important: true,
    content: [
      "./src/**/*.{html,ts}",
    ],
    plugins: [
      require("rippleui")({
        defaultStyle: false, // Desabilita cores padrão do RippleUI
    //     themes: [
		// 	{
		// 		themeName: "custom",
		// 		colorScheme: "dark" | "light",
		// 		prefersColorScheme: true,
		// 		colors: {
		// 			primary: "#634673",
		// 			backgroundPrimary: "#583533",
		// 		},
		// 	},
		// ],
    //     prefix: "pr-"
      }),
    ],
};
