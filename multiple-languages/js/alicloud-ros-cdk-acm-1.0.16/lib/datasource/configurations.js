"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Configurations = exports.ConfigurationsProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const acm_generated_1 = require("./acm.generated");
Object.defineProperty(exports, "ConfigurationsProperty", { enumerable: true, get: function () { return acm_generated_1.RosConfigurations; } });
/**
 * A ROS resource type:  `DATASOURCE::ACM::Configurations`
 */
class Configurations extends ros.Resource {
    /**
     * Create a new `DATASOURCE::ACM::Configurations`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosConfigurations = new acm_generated_1.RosConfigurations(this, id, {
            group: props.group,
            dataId: props.dataId,
            namespaceId: props.namespaceId,
            appName: props.appName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosConfigurations;
        this.attrConfigurations = rosConfigurations.attrConfigurations;
        this.attrDataIds = rosConfigurations.attrDataIds;
    }
}
exports.Configurations = Configurations;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25maWd1cmF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQW9EO0FBRXRCLHVHQUZyQixpQ0FBaUIsT0FFMEI7QUE0QnBEOztHQUVHO0FBQ0gsTUFBYSxjQUFlLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFpQjVDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBMEIsRUFBRSxtQ0FBMkMsSUFBSTtRQUNySCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxpQ0FBaUIsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ3ZELEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztZQUNsQixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07WUFDcEIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztTQUN6QixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLGlCQUFpQixDQUFDO1FBQ2xDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQztRQUMvRCxJQUFJLENBQUMsV0FBVyxHQUFHLGlCQUFpQixDQUFDLFdBQVcsQ0FBQztJQUNyRCxDQUFDO0NBQ0o7QUFyQ0Qsd0NBcUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zQ29uZmlndXJhdGlvbnMgfSBmcm9tICcuL2FjbS5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NDb25maWd1cmF0aW9ucyBhcyBDb25maWd1cmF0aW9uc1Byb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgREFUQVNPVVJDRTo6QUNNOjpDb25maWd1cmF0aW9uc2BcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDb25maWd1cmF0aW9uc1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG5hbWVzcGFjZUlkOiBUaGUgbmFtZXNwYWNlIElEIG9mIGNvbmZpZ3VyYXRpb25cbiAgICAgKi9cbiAgICByZWFkb25seSBuYW1lc3BhY2VJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYXBwTmFtZTogVGhlIGFwcCBuYW1lIG9mIGNvbmZpZ3VyYXRpb25cbiAgICAgKi9cbiAgICByZWFkb25seSBhcHBOYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGF0YUlkOiBUaGUgZGF0YSBJRCBvZiBjb25maWd1cmF0aW9uXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGF0YUlkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZ3JvdXA6IFRoZSBncm91cCBvZiBjb25maWd1cmF0aW9uXG4gICAgICovXG4gICAgcmVhZG9ubHkgZ3JvdXA/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBEQVRBU09VUkNFOjpBQ006OkNvbmZpZ3VyYXRpb25zYFxuICovXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhdGlvbnMgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIENvbmZpZ3VyYXRpb25zOiBUaGUgbGlzdCBvZiBjb25maWd1cmF0aW9ucy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNvbmZpZ3VyYXRpb25zOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRGF0YUlkczogVGhlIGxpc3Qgb2YgY29uZmlndXJhdGlvbiBkYXRhIElEcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRhdGFJZHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgREFUQVNPVVJDRTo6QUNNOjpDb25maWd1cmF0aW9uc2AuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogQ29uZmlndXJhdGlvbnNQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NDb25maWd1cmF0aW9ucyA9IG5ldyBSb3NDb25maWd1cmF0aW9ucyh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGdyb3VwOiBwcm9wcy5ncm91cCxcbiAgICAgICAgICAgIGRhdGFJZDogcHJvcHMuZGF0YUlkLFxuICAgICAgICAgICAgbmFtZXNwYWNlSWQ6IHByb3BzLm5hbWVzcGFjZUlkLFxuICAgICAgICAgICAgYXBwTmFtZTogcHJvcHMuYXBwTmFtZSxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NDb25maWd1cmF0aW9ucztcbiAgICAgICAgdGhpcy5hdHRyQ29uZmlndXJhdGlvbnMgPSByb3NDb25maWd1cmF0aW9ucy5hdHRyQ29uZmlndXJhdGlvbnM7XG4gICAgICAgIHRoaXMuYXR0ckRhdGFJZHMgPSByb3NDb25maWd1cmF0aW9ucy5hdHRyRGF0YUlkcztcbiAgICB9XG59XG4iXX0=