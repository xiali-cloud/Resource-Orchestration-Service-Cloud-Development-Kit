"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoEnableService = exports.AutoEnableServiceProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ros_generated_1 = require("./ros.generated");
Object.defineProperty(exports, "AutoEnableServiceProperty", { enumerable: true, get: function () { return ros_generated_1.RosAutoEnableService; } });
/**
 * A ROS resource type:  `ALIYUN::ROS::AutoEnableService`
 */
class AutoEnableService extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Create a new `ALIYUN::ROS::AutoEnableService`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosAutoEnableService = new ros_generated_1.RosAutoEnableService(this, id, {
            serviceName: props.serviceName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAutoEnableService;
    }
}
exports.AutoEnableService = AutoEnableService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2VuYWJsZXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRvZW5hYmxlc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQXVEO0FBRXRCLDBHQUZ4QixvQ0FBb0IsT0FFNkI7QUErQzFEOztHQUVHO0FBQ0gsTUFBYSxpQkFBa0IsU0FBUSxHQUFHLENBQUMsUUFBUTtJQUUvQzs7O09BR0c7SUFFSDs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQTZCLEVBQUUsbUNBQTJDLElBQUk7UUFDeEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLG9CQUFvQixHQUFHLElBQUksb0NBQW9CLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUM3RCxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7U0FDakMsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBb0IsQ0FBQztJQUN6QyxDQUFDO0NBQ0o7QUF0QkQsOENBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zQXV0b0VuYWJsZVNlcnZpY2UgfSBmcm9tICcuL3Jvcy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NBdXRvRW5hYmxlU2VydmljZSBhcyBBdXRvRW5hYmxlU2VydmljZVByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpST1M6OkF1dG9FbmFibGVTZXJ2aWNlYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEF1dG9FbmFibGVTZXJ2aWNlUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc2VydmljZU5hbWU6IFdoaWNoIHNlcnZpY2UgdG8gZW5hYmxlLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogQUhBUzogQXBwbGljYXRpb24gSGlnaCBBdmFpbGFiaWxpdHkgU2VydmljZVxuICAgICAqIEFSTVM6IFJlYWx0aW1lIE1vbml0b3JpbmcgU2VydmljZVxuICAgICAqIEFwaUdhdGV3YXk6IEFQSSBHYXRld2F5XG4gICAgICogQmF0Y2hDb21wdXRlOiBCYXRjaCBDb21wdXRlXG4gICAgICogQnJhaW5JbmR1c3RyaWFsOiBCcmFpbiBJbmR1c3RyaWFsXG4gICAgICogQ2xvdWRTdG9yYWdlR2F0ZXdheTogQ2xvdWQgU3RvcmFnZSBHYXRld2F5XG4gICAgICogQ01TOiBDbG91ZCBNb25pdG9yIFNlcnZpY2VcbiAgICAgKiBDUjogQ29udGFpbmVyIFJlZ2lzdHJ5XG4gICAgICogQ1M6IENvbnRhaW5lciBTZXJ2aWNlXG4gICAgICogRGF0YUh1YjogRGF0YSBIdWJcbiAgICAgKiBEYXRhV29ya3M6IERhdGFXb3Jrc1xuICAgICAqIERDRE46IER5bmFtaWMgUm91dGUgZm9yIENETlxuICAgICAqIEVEQVM6IEVudGVycHJpc2UgRGlzdHJpYnV0ZWQgQXBwbGljYXRpb24gU2VydmljZVxuICAgICAqIEVNQVM6IEVudGVycHJpc2UgTW9iaWxlIEFwcGxpY2F0aW9uIFN0dWRpb1xuICAgICAqIEZDOiBGdW5jdGlvbiBDb21wdXRlXG4gICAgICogRk5GOiBTZXJ2ZXJsZXNzIFdvcmtmbG93XG4gICAgICogTWF4Q29tcHV0ZTogTWF4Q29tcHV0ZVxuICAgICAqIE5BUzogTmV0d29yayBBdHRhY2hlZCBTdG9yYWdlXG4gICAgICogTU5TOiBNZXNzYWdlIFNlcnZpY2UgKE1OUylcbiAgICAgKiBIQlI6IEh5YnJpZCBCYWNrdXAgUmVjb3ZlcnlcbiAgICAgKiBJTU06IEludGVsbGlnZW50IE1lZGlhIE1hbmFnZW1lbnRcbiAgICAgKiBJT1Q6IElvVCBQbGF0Zm9ybVxuICAgICAqIEtNUzogS2V5IE1hbmFnZW1lbnQgU2VydmljZVxuICAgICAqIE5MUDogTmF0dXJhbCBMYW5ndWFnZSBQcm9jZXNzaW5nXG4gICAgICogT1NTOiBPYmplY3QgU3RvcmFnZSBTZXJ2aWNlXG4gICAgICogT1RTOiBUYWJsZSBTdG9yZVxuICAgICAqIFByaXZhdGVMaW5rOiBQcml2YXRlIExpbmtcbiAgICAgKiBQcml2YXRlWm9uZTogUHJpdmF0ZSBab25lXG4gICAgICogUm9ja2V0TVE6IFJvY2tldE1RXG4gICAgICogU0FFOiBTZXJ2ZXJsZXNzIEFwcCBFbmdpbmVcbiAgICAgKiBTTFM6IExvZyBTZXJ2aWNlXG4gICAgICogVlM6IFZpZGVvIFN1cnZlaWxsYW5jZVxuICAgICAqIFh0cmFjZTogVHJhY2luZyBBbmxheXNpc1xuICAgICAqXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2VydmljZU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6Uk9TOjpBdXRvRW5hYmxlU2VydmljZWBcbiAqL1xuZXhwb3J0IGNsYXNzIEF1dG9FbmFibGVTZXJ2aWNlIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpST1M6OkF1dG9FbmFibGVTZXJ2aWNlYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBBdXRvRW5hYmxlU2VydmljZVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0F1dG9FbmFibGVTZXJ2aWNlID0gbmV3IFJvc0F1dG9FbmFibGVTZXJ2aWNlKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgc2VydmljZU5hbWU6IHByb3BzLnNlcnZpY2VOYW1lLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0F1dG9FbmFibGVTZXJ2aWNlO1xuICAgIH1cbn1cbiJdfQ==