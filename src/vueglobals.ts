import Vue from 'vue';

declare module 'vue/types/vue' {
    interface Vue {
        $platform: {
            mobile: Boolean,
            cordova: Boolean,
            electron: Boolean
        },
        $style: styleOptions,
        $toast(options: {
            title?: string,
            description?: string,
            status?: 'info' | 'warning' | 'error' | 'success' | undefined,
            duration?: number | undefined
        }): void,
        $log: string
    }
}

 
