/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(stacks)` | `/(stacks)/` | `/(stacks)/congrats` | `/(stacks)/initial-amount` | `/(stacks)/monthly-topup` | `/(stacks)/risk-profile` | `/(stacks)/risk-profile-result` | `/(tabs)` | `/(tabs)/` | `/(tabs)/investment` | `/(tabs)/savings` | `/(tabs)/services` | `/(tabs)/settings` | `/_sitemap` | `/congrats` | `/initial-amount` | `/investment` | `/monthly-topup` | `/risk-profile` | `/risk-profile-result` | `/savings` | `/services` | `/settings`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
