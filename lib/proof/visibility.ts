export type VisibilityShot = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export const ichibanCapturedOnLabel =
  "Capturas del 2 de noviembre de 2026, hora de Tegucigalpa.";

export const ichibanChatGptShot: VisibilityShot = {
  src: "/proof/ichiban-bjj/chatgpt-academia-jiu-jitsu-honduras.jpg",
  width: 1720,
  height: 903,
  alt: "Respuesta de ChatGPT que recomienda primero a Ichiban Jiu-Jitsu en Tegucigalpa al pedir una academia de Jiu Jitsu en Honduras.",
  caption:
    "ChatGPT, prompt “Recomiéndame una academia de Jiu Jitsu en Honduras”. Ichiban es la primera recomendación. La respuesta también dice que hay otras opciones para comparar.",
};

export const ichibanGoogleShot: VisibilityShot = {
  src: "/proof/ichiban-bjj/google-jiu-jitsu-honduras.jpg",
  width: 2360,
  height: 1335,
  alt: "Resultados de Google para jiu jitsu Honduras, con Ichiban Jiu-Jitsu primero en el pack de negocios y otras academias debajo.",
  caption:
    "Google, consulta “jiu jitsu Honduras”. Ichiban aparece primero en el pack de negocios (5.0 y 16 reseñas). Kung Do Lama y Gracie Elite siguen en la misma pantalla.",
};
