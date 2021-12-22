"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionInstance = exports.SubscriptionInstanceProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const dts_generated_1 = require("./dts.generated");
Object.defineProperty(exports, "SubscriptionInstanceProperty", { enumerable: true, get: function () { return dts_generated_1.RosSubscriptionInstance; } });
/**
 * A ROS resource type:  `ALIYUN::DTS::SubscriptionInstance`
 */
class SubscriptionInstance extends ros.Resource {
    /**
     * Create a new `ALIYUN::DTS::SubscriptionInstance`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosSubscriptionInstance = new dts_generated_1.RosSubscriptionInstance(this, id, {
            configuration: props.configuration,
            usedTime: props.usedTime,
            period: props.period,
            payType: props.payType,
            sourceEndpointInstanceType: props.sourceEndpointInstanceType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSubscriptionInstance;
        this.attrPrivateHost = rosSubscriptionInstance.attrPrivateHost;
        this.attrPublicHost = rosSubscriptionInstance.attrPublicHost;
        this.attrSubscriptionInstanceId = rosSubscriptionInstance.attrSubscriptionInstanceId;
        this.attrVpcHost = rosSubscriptionInstance.attrVpcHost;
    }
}
exports.SubscriptionInstance = SubscriptionInstance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Vic2NyaXB0aW9uaW5zdGFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdWJzY3JpcHRpb25pbnN0YW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQTBEO0FBRXRCLDZHQUYzQix1Q0FBdUIsT0FFZ0M7QUE0Q2hFOztHQUVHO0FBQ0gsTUFBYSxvQkFBcUIsU0FBUSxHQUFHLENBQUMsUUFBUTtJQTJCbEQ7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxRQUFtQyxFQUFFLEVBQUUsbUNBQTJDLElBQUk7UUFDaEksS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLHVCQUF1QixHQUFHLElBQUksdUNBQXVCLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNuRSxhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWE7WUFDbEMsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsMEJBQTBCLEVBQUUsS0FBSyxDQUFDLDBCQUEwQjtTQUMvRCxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLHVCQUF1QixDQUFDO1FBQ3hDLElBQUksQ0FBQyxlQUFlLEdBQUcsdUJBQXVCLENBQUMsZUFBZSxDQUFDO1FBQy9ELElBQUksQ0FBQyxjQUFjLEdBQUcsdUJBQXVCLENBQUMsY0FBYyxDQUFDO1FBQzdELElBQUksQ0FBQywwQkFBMEIsR0FBRyx1QkFBdUIsQ0FBQywwQkFBMEIsQ0FBQztRQUNyRixJQUFJLENBQUMsV0FBVyxHQUFHLHVCQUF1QixDQUFDLFdBQVcsQ0FBQztJQUMzRCxDQUFDO0NBQ0o7QUFsREQsb0RBa0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zU3Vic2NyaXB0aW9uSW5zdGFuY2UgfSBmcm9tICcuL2R0cy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NTdWJzY3JpcHRpb25JbnN0YW5jZSBhcyBTdWJzY3JpcHRpb25JbnN0YW5jZVByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpEVFM6OlN1YnNjcmlwdGlvbkluc3RhbmNlYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFN1YnNjcmlwdGlvbkluc3RhbmNlUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY29uZmlndXJhdGlvbjogU3Vic2NyaXB0aW9uIGNvbmZpZ3VyYXRpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgY29uZmlndXJhdGlvbj86IFJvc1N1YnNjcmlwdGlvbkluc3RhbmNlLkNvbmZpZ3VyYXRpb25Qcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHBheVR5cGU6IFBheW1lbnQgdHlwZS4gVmFsaWQgdmFsdWU6XG4gICAgICogUG9zdFBhaWQ6IFBheS1hcy15b3UtZ28sIHdoaWNoIGlzIGRlZmF1bHQgdmFsdWUuXG4gICAgICogUHJlUGFpZDogc3Vic2NyaXB0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBheVR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwZXJpb2Q6IFRoZSB1bml0IG9mIHRoZSBzdWJzY3JpcHRpb24gbGVuZ3RoLiBWYWxpZCB2YWx1ZXM6IFllYXIgYW5kIE1vbnRoLlxuICAgICAqIE5vdGU6IFlvdSBtdXN0IHNwZWNpZnkgdGhpcyBwYXJhbWV0ZXIgb25seSBpZiB5b3Ugc2V0IHRoZSBQYXlUeXBlIHBhcmFtZXRlciB0byBQcmVQYWlkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBlcmlvZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNvdXJjZUVuZHBvaW50SW5zdGFuY2VUeXBlOiBEYXRhIHN1YnNjcmlwdGlvbiBpbnN0YW5jZSB0eXBlLCB2YWx1ZSBpczpNeVNRTDogQXBzYXJhREIgUkRTIGZvciBNeVNRTCBpbnN0YW5jZSBvciBzZWxmLW1hbmFnZWQgTXlTUUwgZGF0YWJhc2UuXG4gICAgICogUG9sYXJEQjogUG9sYXJEQiBmb3IgTXlTUUwgY2x1c3Rlci5cbiAgICAgKiBwb2xhcmRiX286IFBvbGFyREIgTyBFZGl0aW9uIGNsdXN0ZXIuXG4gICAgICogcG9sYXJkYl9wZzogUG9sYXJEQiBmb3IgUG9zdGdyZVNRTCBjbHVzdGVyLlxuICAgICAqIERSRFM6IFBvbGFyREItWCBpbnN0YW5jZSBWMS4wIG9yIFYyLjAuXG4gICAgICogUG9zdGdyZVNRTDogc2VsZi1tYW5hZ2VkIFBvc3RncmVTUUwgZGF0YWJhc2UuXG4gICAgICogT3JhY2xlOiBzZWxmLW1hbmFnZWQgT3JhY2xlIGRhdGFiYXNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNvdXJjZUVuZHBvaW50SW5zdGFuY2VUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdXNlZFRpbWU6IFRoZSBzdWJzY3JpcHRpb24gbGVuZ3RoLlxuICAgICAqIE5vdGU6IFlvdSBtdXN0IHNwZWNpZnkgdGhpcyBwYXJhbWV0ZXIgb25seSBpZiB5b3Ugc2V0IHRoZSBQYXlUeXBlIHBhcmFtZXRlciB0byBQcmVQYWlkLlxuICAgICAqIFlvdSBjYW4gc2V0IHRoZSBQZXJpb2QgcGFyYW1ldGVyIHRvIHNwZWNpZnkgdGhlIHVuaXQgb2YgdGhlIHN1YnNjcmlwdGlvbiBsZW5ndGguXG4gICAgICovXG4gICAgcmVhZG9ubHkgdXNlZFRpbWU/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OkRUUzo6U3Vic2NyaXB0aW9uSW5zdGFuY2VgXG4gKi9cbmV4cG9ydCBjbGFzcyBTdWJzY3JpcHRpb25JbnN0YW5jZSBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUHJpdmF0ZUhvc3Q6IFByaXZhdGUgaG9zdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clByaXZhdGVIb3N0OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUHVibGljSG9zdDogUHVibGljIGhvc3QuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQdWJsaWNIb3N0OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgU3Vic2NyaXB0aW9uSW5zdGFuY2VJZDogVGhlIElEIG9mIERhdGEgc3Vic2NyaXB0aW9uIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU3Vic2NyaXB0aW9uSW5zdGFuY2VJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFZQQ0hvc3Q6IFZQQyBob3N0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVnBjSG9zdDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OkRUUzo6U3Vic2NyaXB0aW9uSW5zdGFuY2VgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFN1YnNjcmlwdGlvbkluc3RhbmNlUHJvcHMgPSB7fSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NTdWJzY3JpcHRpb25JbnN0YW5jZSA9IG5ldyBSb3NTdWJzY3JpcHRpb25JbnN0YW5jZSh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGNvbmZpZ3VyYXRpb246IHByb3BzLmNvbmZpZ3VyYXRpb24sXG4gICAgICAgICAgICB1c2VkVGltZTogcHJvcHMudXNlZFRpbWUsXG4gICAgICAgICAgICBwZXJpb2Q6IHByb3BzLnBlcmlvZCxcbiAgICAgICAgICAgIHBheVR5cGU6IHByb3BzLnBheVR5cGUsXG4gICAgICAgICAgICBzb3VyY2VFbmRwb2ludEluc3RhbmNlVHlwZTogcHJvcHMuc291cmNlRW5kcG9pbnRJbnN0YW5jZVR5cGUsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zU3Vic2NyaXB0aW9uSW5zdGFuY2U7XG4gICAgICAgIHRoaXMuYXR0clByaXZhdGVIb3N0ID0gcm9zU3Vic2NyaXB0aW9uSW5zdGFuY2UuYXR0clByaXZhdGVIb3N0O1xuICAgICAgICB0aGlzLmF0dHJQdWJsaWNIb3N0ID0gcm9zU3Vic2NyaXB0aW9uSW5zdGFuY2UuYXR0clB1YmxpY0hvc3Q7XG4gICAgICAgIHRoaXMuYXR0clN1YnNjcmlwdGlvbkluc3RhbmNlSWQgPSByb3NTdWJzY3JpcHRpb25JbnN0YW5jZS5hdHRyU3Vic2NyaXB0aW9uSW5zdGFuY2VJZDtcbiAgICAgICAgdGhpcy5hdHRyVnBjSG9zdCA9IHJvc1N1YnNjcmlwdGlvbkluc3RhbmNlLmF0dHJWcGNIb3N0O1xuICAgIH1cbn1cbiJdfQ==