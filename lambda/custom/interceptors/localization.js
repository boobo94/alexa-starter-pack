import i18n from 'i18next';
import sprintf from 'i18next-sprintf-postprocessor';
import { locales } from '../locales'

export const LocalizationInterceptor = {
    process(handlerInput) {
        const localeName = handlerInput.requestEnvelope.request.locale

        const localizationClient = i18n.use(sprintf).init({
            lng: localeName,
            overloadTranslationOptionHandler: sprintf.overloadTranslationOptionHandler,
            resources: locales,
            returnObjects: true
        });

        const attributes = handlerInput.attributesManager.getRequestAttributes();
        attributes.t = function (...args) {
            return localizationClient.t(...args);
        };

    },
};