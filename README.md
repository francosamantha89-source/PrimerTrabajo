# PrimerTrabajo
# Ejercicios de JavaScript

Este proyecto reúne una serie de ejercicios prácticos de JavaScript organizados por niveles de dificultad. Cada nivel trabaja habilidades específicas de programación, comenzando con estructuras básicas de decisión, continuando con el uso de bucles y finalizando con arreglos, objetos y lógica combinada.

El objetivo principal de estos ejercicios es fortalecer la lógica de programación, la validación de datos, el manejo de estructuras de control y la manipulación de datos en JavaScript.


## Objetivo del proyecto

Desarrollar una colección de ejercicios interactivos que permitan practicar los fundamentos de JavaScript a través de problemas sencillos y progresivos. Cada ejercicio está pensado para reforzar conceptos importantes como:

- Validación de datos de entrada
- Uso de condicionales `if` y `switch`
- Manejo de bucles `for`, `while` y `do...while`
- Trabajo con arreglos y objetos
- Cálculos básicos y lógica aplicada
- Presentación de resultados en HTML


## Estructura del proyecto

Los ejercicios están divididos en tres niveles:

- **Nivel 1:** Validación y condicionales
- **Nivel 2:** Bucles
- **Nivel 3:** Estructuras de datos y lógica combinada

Cada nivel contiene ejercicios enfocados en una habilidad concreta, permitiendo avanzar de manera gradual desde lo más básico hasta problemas un poco más completos.


# Nivel 1: Validación y Condicionales

En este nivel se trabajan las decisiones lógicas por medio de estructuras como `if` y `switch`. Aquí se busca que el usuario aprenda a evaluar condiciones, validar datos y mostrar respuestas diferentes según el caso.

## 1. El Validador de Edad
Este ejercicio solicita una edad al usuario y valida que el dato ingresado sea numérico. Si la edad es menor de 18 años, el sistema muestra el mensaje **“Acceso denegado”**. Si la edad es 18 o mayor, muestra **“Bienvenido”**.  
Su propósito es enseñar validación de entradas y comparación de valores.

## 2. Calculadora de Helados
Se parte de un precio base de **$5** para un helado. Luego el usuario selecciona un topping: **Oreo**, **KitKat** o **Brownie**, cada uno con un valor adicional diferente. Mediante una estructura `switch`, el programa calcula y muestra el precio final.  
Este ejercicio ayuda a comprender la selección entre múltiples opciones.

## 3. Par o Impar
El programa pide un número y utiliza el operador módulo `%` para determinar si es par o impar. Después, mediante un `if`, muestra el resultado correspondiente.  
Este ejercicio introduce el uso de operadores aritméticos dentro de condiciones lógicas.

## 4. Día de la Semana
Se solicita un número del 1 al 7 y, por medio de un `switch`, se muestra el día correspondiente de la semana. Si el número no está dentro de ese rango, se informa que el dato es inválido.  
Este ejercicio enseña a mapear valores numéricos con resultados específicos.

## 5. Calculadora Básica
El usuario ingresa dos números y después elige una operación: **suma**, **resta**, **mult** o **div**. Con `switch`, el sistema ejecuta la operación seleccionada y muestra el resultado.  
Aquí se refuerza el uso de condicionales múltiples junto con operaciones matemáticas simples.

## 6. Aprobado o Reprobado
Este ejercicio pide tres notas, las convierte a valores numéricos con `parseFloat`, calcula el promedio y determina si el estudiante está **Aprobado** o **Reprobado**. Si el promedio es mayor o igual a 6, aprueba; de lo contrario, reprueba.  
Su finalidad es practicar cálculos con decimales y decisiones con base en resultados.

## 7. Conversor de Moneda
El usuario ingresa una cantidad en dólares y elige a qué moneda convertirla: **Euros**, **Pesos** o **Soles**. Usando `switch` y tasas de cambio fijas, el sistema calcula la conversión.  
Este ejercicio combina entrada de datos, selección de opciones y operaciones matemáticas.


# Nivel 2: Bucles

En este nivel se practican estructuras repetitivas. La idea es resolver problemas donde una acción debe ejecutarse varias veces. Se propone desarrollar los ejercicios usando `for`, `while` y `do while`, con el fin de comprender las diferencias entre estos tres tipos de bucles.

## 8. Cuenta Regresiva
Consiste en mostrar en el HTML los números del 10 al 1 en orden descendente.  
Este ejercicio permite trabajar la repetición controlada y la visualización de resultados en pantalla.

## 9. Suma Acumulativa
Se solicita un número **N** y el programa suma todos los números desde 1 hasta **N**. Por ejemplo, si el usuario ingresa 5, el sistema calcula `1 + 2 + 3 + 4 + 5`.  
Aquí se fortalece la lógica de acumulación dentro de un bucle.

## 10. Buscador de Múltiplos
El objetivo es mostrar todos los múltiplos de 5 entre 1 y 50.  
Este ejercicio enseña a usar condiciones dentro de ciclos para filtrar valores según una regla matemática.

## 11. La Clave Maestra
Se implementa un bucle `while` que solicita una contraseña al usuario repetidamente hasta que escriba **“SESAMO123”**.  
Su propósito es practicar repeticiones condicionadas y validar una entrada hasta que sea correcta.

## 12. Tabla de Potencias
El usuario ingresa un número y el programa muestra sus primeras 5 potencias: número elevado a 1, 2, 3, 4 y 5.  
Este ejercicio ayuda a trabajar iteraciones junto con operaciones matemáticas más elaboradas.

## 13. Filtro de Positivos
Con un `do...while`, el sistema solicita números al usuario de forma repetida. El proceso continúa mientras los valores sean positivos y termina cuando se introduce un número negativo.  
Este ejercicio permite entender el funcionamiento de un ciclo que siempre se ejecuta al menos una vez.


# Nivel 3: Estructuras de Datos y Lógica Combinada

En este nivel se integran conceptos más completos como arreglos, objetos, ciclos y condicionales. Los ejercicios están orientados a la manipulación de datos y a la resolución de problemas que combinan varias estructuras de JavaScript.

## 14. El Array de Compras
Se crea un arreglo vacío y, mediante un bucle `for`, se solicitan 5 productos al usuario. Cada producto se agrega al arreglo con `.push()`. Al final, la lista se muestra en el HTML.  
Este ejercicio introduce la creación y llenado de arreglos dinámicamente.

## 15. Buscador de Nombres
Se trabaja con un arreglo que contiene 5 nombres. Luego el usuario ingresa un nombre y el programa recorre la lista para verificar si existe o no.  
Este ejercicio enseña a buscar información dentro de un arreglo mediante iteración.

## 16. Objeto Auto
Se crea un objeto `auto` con propiedades como **marca**, **modelo** y **año**. Después, el usuario ingresa un nuevo año y el sistema actualiza esa propiedad, mostrando el objeto modificado.  
Este ejercicio permite comprender cómo se crean, leen y actualizan objetos.

## 17. Lista de Estudiantes
Se construye un arreglo en el que se almacenan 3 estudiantes. Cada estudiante se guarda como un objeto con propiedades como **nombre** y **nota**.  
Este ejercicio combina arreglos y objetos, dos estructuras fundamentales en JavaScript.

## 18. Carrito con Descuento
El usuario ingresa precios de productos hasta escribir **“0”** para terminar. El sistema suma todos los valores y, si el total supera los **$100**, aplica un descuento del 10%.  
Este ejercicio integra acumulación, condición de salida y aplicación de descuentos mediante lógica condicional.

## 19. El Menú Infinito
Se utiliza un `do...while` para mostrar un menú con tres opciones: **saludar**, **despedirse** o **salir**. El programa continúa ejecutándose hasta que el usuario selecciona la opción 3.  
Este ejercicio refuerza el uso de menús interactivos y bucles controlados por la elección del usuario.

## 20. Reemplazo en Array
Se crea un arreglo con 5 números. Luego el usuario indica un nuevo número y la posición donde desea colocarlo, entre 0 y 4. El valor de esa posición se reemplaza y finalmente se muestra el arreglo actualizado.  
Este ejercicio trabaja la modificación directa de elementos dentro de un arreglo.


## Tecnologías utilizadas

- **HTML5**
- **CSS3**
- **JavaScript**


## Aprendizajes desarrollados

A través de estos ejercicios se fortalecen habilidades como:

- Comprender la lógica condicional
- Validar entradas de usuario
- Resolver problemas con estructuras repetitivas
- Manipular arreglos y objetos
- Mostrar resultados de forma clara en una interfaz HTML
- Organizar código por niveles y funcionalidades


## Conclusión

Este proyecto representa una práctica progresiva de los fundamentos de JavaScript. Los ejercicios están diseñados para desarrollar la lógica de programación paso a paso, empezando por decisiones simples y avanzando hacia estructuras de datos y problemas más completos.

Además de servir como práctica académica, este conjunto de ejercicios puede utilizarse como base para futuros proyectos más grandes, donde se requiera validar información, procesar datos y mostrar resultados de manera dinámica.