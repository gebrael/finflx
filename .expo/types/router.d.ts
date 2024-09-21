/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(stacks)` | `/(stacks)/investment` | `/(stacks)/risk-profile` | `/(tabs)` | `/(tabs)/` | `/(tabs)/investment` | `/(tabs)/savings` | `/(tabs)/services` | `/(tabs)/settings` | `/_sitemap` | `/investment` | `/risk-profile` | `/savings` | `/services` | `/settings`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
