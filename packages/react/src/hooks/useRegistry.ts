import { GlobalRegistry, IDesignerRegistry } from '@kokoro/designable-core'
import { globalThisPolyfill } from '@kokoro/designable-shared'

export const useRegistry = (): IDesignerRegistry => {
  return globalThisPolyfill['__DESIGNER_REGISTRY__'] || GlobalRegistry
}
