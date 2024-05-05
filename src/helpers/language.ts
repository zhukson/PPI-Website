import {ref} from 'vue'

type langType = 'EN' | 'CN'
export const lang = ref<langType>('EN')