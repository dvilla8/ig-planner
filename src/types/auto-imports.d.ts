/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// noinspection JSUnusedGlobalSymbols
// Generated by unplugin-auto-import
export {}
declare global {
  const EffectScope: typeof import('vue')['EffectScope']
  const acceptHMRUpdate: typeof import('pinia')['acceptHMRUpdate']
  const axios: typeof import('axios')['default']
  const computed: typeof import('vue')['computed']
  const createApp: typeof import('vue')['createApp']
  const createJsonFileFromObject: typeof import('../utils/utilsFile')['createJsonFileFromObject']
  const createPinia: typeof import('pinia')['createPinia']
  const customRef: typeof import('vue')['customRef']
  const defineAsyncComponent: typeof import('vue')['defineAsyncComponent']
  const defineComponent: typeof import('vue')['defineComponent']
  const defineStore: typeof import('pinia')['defineStore']
  const effectScope: typeof import('vue')['effectScope']
  const extractUsernameFromUserId: typeof import('../utils/utilsPlatform')['extractUsernameFromUserId']
  const fetchFileFromUrl: typeof import('../utils/utilsFile')['fetchFileFromUrl']
  const fetchRemoteUserConfig: typeof import('../utils/utilsUserConfig')['fetchRemoteUserConfig']
  const fulfillMediaPostsForMediaExport: typeof import('../utils/utilsUserExport')['fulfillMediaPostsForMediaExport']
  const generateUuid4: typeof import('../utils/utilsString')['generateUuid4']
  const generateUuidv4: typeof import('../utils/utilsString')['generateUuidv4']
  const getActivePinia: typeof import('pinia')['getActivePinia']
  const getCurrentInstance: typeof import('vue')['getCurrentInstance']
  const getCurrentScope: typeof import('vue')['getCurrentScope']
  const getFileExtension: typeof import('../utils/utilsFile')['getFileExtension']
  const getFileName: typeof import('../utils/utilsFile')['getFileName']
  const getMediaFilePath: typeof import('../utils/utilsFile')['getMediaFilePath']
  const getPlatformFromPlatformUser: typeof import('../utils/utilsPlatform')['getPlatformFromPlatformUser']
  const getPlatformStructureUser: typeof import('../utils/utilsPlatform')['getPlatformStructureUser']
  const getUsernameFromUserPath: typeof import('../utils/utilsPlatform')['getUsernameFromUserPath']
  const h: typeof import('vue')['h']
  const handleMediaForSrc: typeof import('../utils/utilsFile')['handleMediaForSrc']
  const inject: typeof import('vue')['inject']
  const instagramUserClass: typeof import('../core/platform/instagramUser.class')['default']
  const instagramUserMediaClass: typeof import('../core/platform/instagramUserMedia.class')['default']
  const instagramUserProfileClass: typeof import('../core/platform/instagramUserProfile.class')['default']
  const isPromise: typeof import('../utils/utilsFile')['isPromise']
  const isProxy: typeof import('vue')['isProxy']
  const isReactive: typeof import('vue')['isReactive']
  const isReadonly: typeof import('vue')['isReadonly']
  const isRef: typeof import('vue')['isRef']
  const isValidJson: typeof import('../utils/utilsString')['isValidJson']
  const mapActions: typeof import('pinia')['mapActions']
  const mapGetters: typeof import('pinia')['mapGetters']
  const mapState: typeof import('pinia')['mapState']
  const mapStores: typeof import('pinia')['mapStores']
  const mapWritableState: typeof import('pinia')['mapWritableState']
  const markRaw: typeof import('vue')['markRaw']
  const mediaAlbumClass: typeof import('../core/media/mediaAlbum.class')['default']
  const mediaClass: typeof import('../core/media/media.class')['default']
  const mediaIframeClass: typeof import('../core/media/mediaIframe.class')['default']
  const mediaImageClass: typeof import('../core/media/mediaImage.class')['default']
  const mediaVideoClass: typeof import('../core/media/mediaVideo.class')['default']
  const nextTick: typeof import('vue')['nextTick']
  const onActivated: typeof import('vue')['onActivated']
  const onBeforeMount: typeof import('vue')['onBeforeMount']
  const onBeforeRouteLeave: typeof import('vue-router')['onBeforeRouteLeave']
  const onBeforeRouteUpdate: typeof import('vue-router')['onBeforeRouteUpdate']
  const onBeforeUnmount: typeof import('vue')['onBeforeUnmount']
  const onBeforeUpdate: typeof import('vue')['onBeforeUpdate']
  const onDeactivated: typeof import('vue')['onDeactivated']
  const onErrorCaptured: typeof import('vue')['onErrorCaptured']
  const onMounted: typeof import('vue')['onMounted']
  const onRenderTracked: typeof import('vue')['onRenderTracked']
  const onRenderTriggered: typeof import('vue')['onRenderTriggered']
  const onScopeDispose: typeof import('vue')['onScopeDispose']
  const onServerPrefetch: typeof import('vue')['onServerPrefetch']
  const onUnmounted: typeof import('vue')['onUnmounted']
  const onUpdated: typeof import('vue')['onUpdated']
  const openUserDirectory: typeof import('../utils/utilsUserProfile')['openUserDirectory']
  const parseUserProfileConfigFromFileDirectory: typeof import('../utils/utilsUserProfile')['parseUserProfileConfigFromFileDirectory']
  const platformStructure: typeof import('../core/structure/index')['platformStructure']
  const provide: typeof import('vue')['provide']
  const reactive: typeof import('vue')['reactive']
  const readonly: typeof import('vue')['readonly']
  const ref: typeof import('vue')['ref']
  const removeUndefinedFromObject: typeof import('../utils/utilsObject')['removeUndefinedFromObject']
  const resolveComponent: typeof import('vue')['resolveComponent']
  const setActivePinia: typeof import('pinia')['setActivePinia']
  const setMapStoreSuffix: typeof import('pinia')['setMapStoreSuffix']
  const shallowReactive: typeof import('vue')['shallowReactive']
  const shallowReadonly: typeof import('vue')['shallowReadonly']
  const shallowRef: typeof import('vue')['shallowRef']
  const storeToRefs: typeof import('pinia')['storeToRefs']
  const toRaw: typeof import('vue')['toRaw']
  const toRef: typeof import('vue')['toRef']
  const toRefs: typeof import('vue')['toRefs']
  const toValue: typeof import('vue')['toValue']
  const triggerRef: typeof import('vue')['triggerRef']
  const unref: typeof import('vue')['unref']
  const useAttrs: typeof import('vue')['useAttrs']
  const useCssModule: typeof import('vue')['useCssModule']
  const useCssVars: typeof import('vue')['useCssVars']
  const useExtraStore: typeof import('../stores/storeExtra')['useExtraStore']
  const useFileDialog: typeof import('@vueuse/core')['useFileDialog']
  const useLink: typeof import('vue-router')['useLink']
  const useRoute: typeof import('vue-router')['useRoute']
  const useRouter: typeof import('vue-router')['useRouter']
  const useSlots: typeof import('vue')['useSlots']
  const useTheme: typeof import('vuetify')['useTheme']
  const useThemeStore: typeof import('../stores/storeTheme')['useThemeStore']
  const useUserConfigStore: typeof import('../stores/storeUserConfig')['useUserConfigStore']
  const useUserEditorStore: typeof import('../stores/storeUserEditor')['useUserEditorStore']
  const useUserImportStore: typeof import('../stores/storeUserImport')['useUserImportStore']
  const useUserSelectorStore: typeof import('../stores/storeUserSelector')['useUserSelectorStore']
  const useUserStorageStore: typeof import('../stores/storeUserStorage')['useUserStorageStore']
  const useUserStore: typeof import('../stores/storeUser')['useUserStore']
  const userAvatarClass: typeof import('../core/user/userAvatar.class')['default']
  const userClass: typeof import('../core/user/user.class')['default']
  const userMediaClass: typeof import('../core/user/userMedia.class')['default']
  const userProfileClass: typeof import('../core/user/userProfile.class')['default']
  const userStorageClass: typeof import('../core/user/userStorage.class')['default']
  const watch: typeof import('vue')['watch']
  const watchEffect: typeof import('vue')['watchEffect']
  const watchPostEffect: typeof import('vue')['watchPostEffect']
  const watchSyncEffect: typeof import('vue')['watchSyncEffect']
}
// for type re-export
declare global {
  // @ts-ignore
  export type { Component, ComponentPublicInstance, ComputedRef, ExtractDefaultPropTypes, ExtractPropTypes, ExtractPublicPropTypes, InjectionKey, PropType, Ref, VNode, WritableComputedRef, App } from 'vue'
  import('vue')
}
