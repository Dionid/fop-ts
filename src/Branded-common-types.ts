import { BrandedPrimitive } from './Branded'

export type StringX = BrandedPrimitive<string, { readonly StringX: unique symbol }>
export const StringX = {
  ofString: (
    rules: {
      min?: number
      max?: number
    },
    value: string
  ) => {
    if (rules.min !== undefined && value.length < rules.min) {
      return new Error(`${value} must be minimum ${rules.min} symbols`)
    }

    if (rules.max !== undefined && value.length > rules.max) {
      return new Error(`${value} must be maximum ${rules.max} symbols`)
    }

    return value
  }
}

export type NotEmptyString = BrandedPrimitive<StringX, { readonly NotEmptyString: unique symbol }>
export const NotEmptyString = {
  ofString: (value: string): NotEmptyString => {
    return StringX.ofString({ min: 1 }, value) as NotEmptyString
  }
}
