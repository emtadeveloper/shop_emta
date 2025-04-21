import { promises as fs } from 'fs';
import { createLocalizedSuccess, createLocalizedError } from '../../common/locale/localizationHelper.mjs';
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const provincesPath = join(__dirname, '..', '..', 'cities', 'provinces.json');
const citiesPath = join(__dirname, '..', '..', 'cities', 'cities.json');

router.get('/provinces', async (req, res, next) => {
    try {
        const data = await fs.readFile(provincesPath, 'utf-8');
        const provinces = JSON.parse(data);
        return createLocalizedSuccess(res, 'successFetchProvinces', provinces);
    } catch (err) {
        if (err.code === 'ENOENT') {
            return createLocalizedError(res, 'readFileError');
        }
        if (err.name === 'SyntaxError') {
            return createLocalizedError(res, 'invalidJsonFormat');
        }
        return next(err);
    }
});

router.get('/cities', async (req, res, next) => {
    try {
        const data = await fs.readFile(citiesPath, 'utf-8');
        const cities = JSON.parse(data);
        return createLocalizedSuccess(res, 'successFetchCities', cities);
    } catch (err) {
        if (err.code === 'ENOENT') {
            return createLocalizedError(res, 'readFileError');
        }
        if (err.name === 'SyntaxError') {
            return createLocalizedError(res, 'invalidJsonFormat');
        }
        return next(err);
    }
});

export default router;
