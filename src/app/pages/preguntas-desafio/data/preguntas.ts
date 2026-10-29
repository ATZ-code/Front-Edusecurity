
export interface Pregunta {
  enunciado: string;
  opciones: string[];
  respuestaCorrecta: number;
  explicacion: string;
  puntos: number;
}

export const PREGUNTAS: Pregunta[] = [
  {
    enunciado: '¿Qué es el phishing?',
    opciones: [
      'Un programa antivirus',
      'Un engaño para robar información personal',
      'Una actualización del sistema',
      'Una herramienta de programación'
    ],
    respuestaCorrecta: 1,
    explicacion:
      'El phishing intenta engañar a las personas para obtener contraseñas o datos personales.',
    puntos: 10
  },
  {
    enunciado: '¿Qué debes hacer antes de abrir un enlace sospechoso?',
    opciones: [
      'Abrirlo inmediatamente',
      'Ingresar tus datos personales',
      'Verificar el remitente y la dirección',
      'Compartirlo con tus contactos'
    ],
    respuestaCorrecta: 2,
    explicacion:
      'Verificar el remitente y la dirección ayuda a detectar enlaces maliciosos.',
    puntos: 10
  },
  {
    enunciado: '¿Cuál es la mejor práctica para tus contraseñas?',
    opciones: [
      'Usar 123456',
      'Utilizar la misma en todas las cuentas',
      'Compartirlas con amigos',
      'Usar contraseñas largas y diferentes'
    ],
    respuestaCorrecta: 3,
    explicacion:
      'Las contraseñas largas y únicas ayudan a proteger tus cuentas.',
    puntos: 10
  },
  {
    enunciado: '¿Qué debes hacer si sospechas que robaron tu contraseña?',
    opciones: [
      'Ignorar el problema',
      'Cambiarla desde el sitio oficial y proteger la cuenta',
      'Publicarla en redes sociales',
      'Usarla en todas tus cuentas'
    ],
    respuestaCorrecta: 1,
    explicacion:
      'Cambia la contraseña desde el sitio oficial y activa la verificación en dos pasos cuando esté disponible.',
    puntos: 10
  }
];

