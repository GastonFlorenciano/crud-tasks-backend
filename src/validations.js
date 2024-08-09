import { body } from 'express-validator';

export const validationsPostTask = [

    body("title")
        .isString().withMessage("El título debe ser de tipo string")
        .notEmpty().withMessage("El título no debe estar vacío"),
    body("description")
        .isString().withMessage("La descripción debe ser de tipo string")
        .notEmpty().withMessage("La descripción no debe estar vacía"),
    body("isComplete")
        .isBoolean().withMessage("isComplete debe ser un booleano")
        .notEmpty().withMessage("isComplete no puede estar vacío")

]
export const validationsDeleteTask = [

    body("title")
        .isString().withMessage("El título debe ser de tipo string")
        .notEmpty().withMessage("El título no debe estar vacío"),
    body("description")
        .isString().withMessage("La descripción debe ser de tipo string")
        .notEmpty().withMessage("La descripción no debe estar vacía"),
    body("isComplete")
        .isBoolean().withMessage("isComplete debe ser un booleano")
        .notEmpty().withMessage("isComplete no puede estar vacío")

]