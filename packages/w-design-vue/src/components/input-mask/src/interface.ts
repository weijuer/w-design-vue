import { PropType, type ExtractPropTypes } from 'vue'
import { inputProps, inputEmits } from '../../input/src/interface'

export interface Token {
    validate: (char: string) => boolean;
    transform: (char: string) => string
}

export interface Pattern {
    pattern: string;
    formatCharacters: Record<string, Token>
}

export const inputMaskProps = {
    ...inputProps,
    slotChar: {
        type: String,
        default: '#'
    },
    mask: {
        type: [String, Object],
        required: true,
        validator: (value: any) => !!((value && value.length >= 1) || value instanceof Object),
    },
    tokens: {
        type: Object as PropType<Pattern>
    },
    splitted: Boolean
}

export const inputMaskEmits = [...inputEmits, 'keydown', 'complete', 'keypress', 'paste']

export type InputMaskProps = ExtractPropTypes<typeof inputMaskProps>
export type InputMaskEmits = typeof inputMaskEmits
