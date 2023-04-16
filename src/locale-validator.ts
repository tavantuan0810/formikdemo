import * as yup from 'yup';
import { translate } from 'react-jhipster';

yup.setLocale({
    mixed: {
        required: () => ({ key: 'common.validateRequired' }),
    },
    string: {
        min: ({ min }) => ({ key: 'common.validateMinLength', values: { min } }),
        max: ({ max }) => ({ key: 'common.validateMaxLength', values: { max } }),
    },
    number: {
        min: ({ min }) => ({ key: 'common.validateMinNumber', values: { min } }),
        max: ({ max }) => ({ key: 'common.validateMaxNumber', values: { max } }),
    }
});