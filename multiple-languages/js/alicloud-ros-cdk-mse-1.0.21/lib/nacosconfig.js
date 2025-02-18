"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NacosConfig = exports.NacosConfigProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const mse_generated_1 = require("./mse.generated");
Object.defineProperty(exports, "NacosConfigProperty", { enumerable: true, get: function () { return mse_generated_1.RosNacosConfig; } });
/**
 * A ROS resource type:  `ALIYUN::MSE::NacosConfig`
 */
class NacosConfig extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Create a new `ALIYUN::MSE::NacosConfig`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosNacosConfig = new mse_generated_1.RosNacosConfig(this, id, {
            group: props.group,
            desc: props.desc,
            type: props.type,
            dataId: props.dataId,
            instanceId: props.instanceId,
            content: props.content,
            betaIps: props.betaIps,
            namespaceId: props.namespaceId,
            tags: props.tags,
            appName: props.appName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosNacosConfig;
    }
}
exports.NacosConfig = NacosConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFjb3Njb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuYWNvc2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQWlEO0FBRXRCLG9HQUZsQiw4QkFBYyxPQUV1QjtBQTBEOUM7O0dBRUc7QUFDSCxNQUFhLFdBQVksU0FBUSxHQUFHLENBQUMsUUFBUTtJQUV6Qzs7O09BR0c7SUFFSDs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXVCLEVBQUUsbUNBQTJDLElBQUk7UUFDbEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLGNBQWMsR0FBRyxJQUFJLDhCQUFjLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNqRCxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7WUFDbEIsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1lBQ2hCLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNoQixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07WUFDcEIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNoQixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87U0FDekIsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUM7SUFDbkMsQ0FBQztDQUNKO0FBL0JELGtDQStCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc05hY29zQ29uZmlnIH0gZnJvbSAnLi9tc2UuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zTmFjb3NDb25maWcgYXMgTmFjb3NDb25maWdQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6TVNFOjpOYWNvc0NvbmZpZ2BcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOYWNvc0NvbmZpZ1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRhdGFJZDogVGhlIGRhdGEgSUQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGF0YUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBncm91cDogVGhlIElEIG9mIHRoZSBncm91cC5cbiAgICAgKi9cbiAgICByZWFkb25seSBncm91cDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW5zdGFuY2VJZDogVGhlIElEIG9mIHRoZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhcHBOYW1lOiBUaGUgbmFtZSBvZiB0aGUgYXBwbGljYXRpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgYXBwTmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGJldGFJcHM6IFRoZSBsaXN0IG9mIElQIGFkZHJlc3NlcyB3aGVyZSB0aGUgYmV0YSByZWxlYXNlIG9mIHRoZSBjb25maWd1cmF0aW9uIGlzIHBlcmZvcm1lZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBiZXRhSXBzPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY29udGVudDogVGhlIGNvbnRlbnQgb2YgdGhlIGNvbmZpZ3VyYXRpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgY29udGVudD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRlc2M6IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgY29uZmlndXJhdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbmFtZXNwYWNlSWQ6IFRoZSBJRCBvZiB0aGUgbmFtZXNwYWNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hbWVzcGFjZUlkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdGFnczogVGhlIHRhZyBvZiB0aGUgY29uZmlndXJhdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YWdzPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdHlwZTogVGhlIGZvcm1hdCBvZiB0aGUgY29uZmlndXJhdGlvbi4gU3VwcG9ydGVkIGZvcm1hdHMgaW5jbHVkZSBURVhULCBKU09OLCBhbmQgWE1MLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46Ok1TRTo6TmFjb3NDb25maWdgXG4gKi9cbmV4cG9ydCBjbGFzcyBOYWNvc0NvbmZpZyBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6TVNFOjpOYWNvc0NvbmZpZ2AuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogTmFjb3NDb25maWdQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NOYWNvc0NvbmZpZyA9IG5ldyBSb3NOYWNvc0NvbmZpZyh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGdyb3VwOiBwcm9wcy5ncm91cCxcbiAgICAgICAgICAgIGRlc2M6IHByb3BzLmRlc2MsXG4gICAgICAgICAgICB0eXBlOiBwcm9wcy50eXBlLFxuICAgICAgICAgICAgZGF0YUlkOiBwcm9wcy5kYXRhSWQsXG4gICAgICAgICAgICBpbnN0YW5jZUlkOiBwcm9wcy5pbnN0YW5jZUlkLFxuICAgICAgICAgICAgY29udGVudDogcHJvcHMuY29udGVudCxcbiAgICAgICAgICAgIGJldGFJcHM6IHByb3BzLmJldGFJcHMsXG4gICAgICAgICAgICBuYW1lc3BhY2VJZDogcHJvcHMubmFtZXNwYWNlSWQsXG4gICAgICAgICAgICB0YWdzOiBwcm9wcy50YWdzLFxuICAgICAgICAgICAgYXBwTmFtZTogcHJvcHMuYXBwTmFtZSxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NOYWNvc0NvbmZpZztcbiAgICB9XG59XG4iXX0=