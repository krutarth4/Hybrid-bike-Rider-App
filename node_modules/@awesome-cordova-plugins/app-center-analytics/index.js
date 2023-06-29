var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var AppCenterAnalyticsOriginal = /** @class */ (function (_super) {
    __extends(AppCenterAnalyticsOriginal, _super);
    function AppCenterAnalyticsOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppCenterAnalyticsOriginal.prototype.trackEvent = function (eventName, properties) { return cordova(this, "trackEvent", {}, arguments); };
    AppCenterAnalyticsOriginal.prototype.isEnabled = function () { return cordova(this, "isEnabled", {}, arguments); };
    AppCenterAnalyticsOriginal.prototype.setEnabled = function (shouldEnable) { return cordova(this, "setEnabled", {}, arguments); };
    AppCenterAnalyticsOriginal.pluginName = "AppCenterAnalytics";
    AppCenterAnalyticsOriginal.plugin = "cordova-plugin-appcenter-analytics";
    AppCenterAnalyticsOriginal.pluginRef = "AppCenter.Analytics";
    AppCenterAnalyticsOriginal.repo = "https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-analytics";
    AppCenterAnalyticsOriginal.platforms = ["Android", "iOS"];
    return AppCenterAnalyticsOriginal;
}(AwesomeCordovaNativePlugin));
var AppCenterAnalytics = new AppCenterAnalyticsOriginal();
export { AppCenterAnalytics };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYXBwLWNlbnRlci1hbmFseXRpY3MvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBMENwRCxzQ0FBMEI7Ozs7SUFXaEUsdUNBQVUsYUFBQyxTQUFpQixFQUFFLFVBQXFCO0lBVW5ELHNDQUFTO0lBV1QsdUNBQVUsYUFBQyxZQUFxQjs7Ozs7OzZCQTNFbEM7RUEyQ3dDLDBCQUEwQjtTQUFyRCxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0cmluZ01hcCB7XG4gIFtzOiBzdHJpbmddOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQG5hbWUgQXBwIENlbnRlciBBbmFseXRpY3NcbiAqIEBkZXNjcmlwdGlvblxuICogQXBwIENlbnRlciBBbmFseXRpY3MgaGVscHMgeW91IHVuZGVyc3RhbmQgdXNlciBiZWhhdmlvciBhbmQgY3VzdG9tZXIgZW5nYWdlbWVudCB0byBpbXByb3ZlIHlvdXIgYXBwLlxuICogVGhlIFNESyBhdXRvbWF0aWNhbGx5IGNhcHR1cmVzIHNlc3Npb24gY291bnQgYW5kIGRldmljZSBwcm9wZXJ0aWVzIGxpa2UgbW9kZWwsIE9TIHZlcnNpb24sIGV0Yy5cbiAqIFlvdSBjYW4gZGVmaW5lIHlvdXIgb3duIGN1c3RvbSBldmVudHMgdG8gbWVhc3VyZSB0aGluZ3MgdGhhdCBtYXR0ZXIgdG8geW91LlxuICogQWxsIHRoZSBpbmZvcm1hdGlvbiBjYXB0dXJlZCBpcyBhdmFpbGFibGUgaW4gdGhlIEFwcCBDZW50ZXIgcG9ydGFsIGZvciB5b3UgdG8gYW5hbHl6ZSB0aGUgZGF0YS5cbiAqXG4gKiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIGh0dHBzOi8vZG9jcy5taWNyb3NvZnQuY29tL2VuLXVzL2FwcGNlbnRlci9zZGsvYW5hbHl0aWNzL2NvcmRvdmFcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQXBwQ2VudGVyQW5hbHl0aWNzIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2FwcC1jZW50ZXItYW5hbHl0aWNzL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBwQ2VudGVyQW5hbHl0aWNzOiBBcHBDZW50ZXJBbmFseXRpY3MpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuYXBwQ2VudGVyQW5hbHl0aWNzLnNldEVuYWJsZWQodHJ1ZSkudGhlbigoKSA9PiB7XG4gKiAgICB0aGlzLmFwcENlbnRlckFuYWx5dGljcy50cmFja0V2ZW50KCdNeSBFdmVudCcsIHsgVEVTVDogJ0hFTExPX1dPUkxEJyB9KS50aGVuKCgpID0+IHtcbiAqICAgICAgICBjb25zb2xlLmxvZygnQ3VzdG9tIGV2ZW50IHRyYWNrZWQnKTtcbiAqICAgIH0pO1xuICogfSk7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogU3RyaW5nTWFwXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQXBwQ2VudGVyQW5hbHl0aWNzJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYXBwY2VudGVyLWFuYWx5dGljcycsXG4gIHBsdWdpblJlZjogJ0FwcENlbnRlci5BbmFseXRpY3MnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9hcHBjZW50ZXItc2RrLWNvcmRvdmEvdHJlZS9tYXN0ZXIvY29yZG92YS1wbHVnaW4tYXBwY2VudGVyLWFuYWx5dGljcycsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcHBDZW50ZXJBbmFseXRpY3MgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBUcmFja3MgYW4gY3VzdG9tIGV2ZW50LlxuICAgKiBZb3UgY2FuIHNlbmQgdXAgdG8gMjAwIGRpc3RpbmN0IGV2ZW50IG5hbWVzLiBBbHNvLCB0aGVyZSBpcyBhIG1heGltdW0gbGltaXQgb2YgMjU2IGNoYXJhY3RlcnMgcGVyIGV2ZW50IG5hbWVcbiAgICogYW5kIDY0IGNoYXJhY3RlcnMgcGVyIGV2ZW50IHByb3BlcnR5IG5hbWUgYW5kIGV2ZW50IHByb3BlcnR5IHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGV2ZW50TmFtZSBFdmVudCBuYW1lXG4gICAqIEBwYXJhbSAge1N0cmluZ01hcH0gcHJvcGVydGllcyBFdmVudCBwcm9wZXJ0aWVzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB0cmFja0V2ZW50KGV2ZW50TmFtZTogc3RyaW5nLCBwcm9wZXJ0aWVzOiBTdHJpbmdNYXApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgQXBwIENlbnRlciBBbmFseXRpY3MgaXMgZW5hYmxlZFxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaXNFbmFibGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGUgb3IgZGlzYWJsZSBBcHAgQ2VudGVyIEFuYWx5dGljcyBhdCBydW50aW1lXG4gICAqXG4gICAqIEBwYXJhbSAge2Jvb2xlYW59IHNob3VsZEVuYWJsZSBTZXQgdmFsdWVcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldEVuYWJsZWQoc2hvdWxkRW5hYmxlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=