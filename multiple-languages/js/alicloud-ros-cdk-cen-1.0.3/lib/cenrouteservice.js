"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CenRouteService = exports.CenRouteServiceProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const cen_generated_1 = require("./cen.generated");
Object.defineProperty(exports, "CenRouteServiceProperty", { enumerable: true, get: function () { return cen_generated_1.RosCenRouteService; } });
/**
 * A ROS resource type:  `ALIYUN::CEN::CenRouteService`
 */
class CenRouteService extends ros.Resource {
    /**
     * Create a new `ALIYUN::CEN::CenRouteService`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosCenRouteService = new cen_generated_1.RosCenRouteService(this, id, {
            description: props.description,
            hostRegionId: props.hostRegionId,
            cenId: props.cenId,
            accessRegionId: props.accessRegionId,
            host: props.host,
            hostVpcId: props.hostVpcId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCenRouteService;
        this.attrId = rosCenRouteService.attrId;
    }
}
exports.CenRouteService = CenRouteService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Vucm91dGVzZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2Vucm91dGVzZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBcUQ7QUFFdEIsd0dBRnRCLGtDQUFrQixPQUUyQjtBQXdDdEQ7O0dBRUc7QUFDSCxNQUFhLGVBQWdCLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFZN0M7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUEyQixFQUFFLG1DQUEyQyxJQUFJO1FBQ3RILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLGtDQUFrQixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDekQsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7WUFDbEIsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjO1lBQ3BDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNoQixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7U0FDN0IsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxrQkFBa0IsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLGtCQUFrQixDQUFDLE1BQU0sQ0FBQztJQUM1QyxDQUFDO0NBQ0o7QUFqQ0QsMENBaUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zQ2VuUm91dGVTZXJ2aWNlIH0gZnJvbSAnLi9jZW4uZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zQ2VuUm91dGVTZXJ2aWNlIGFzIENlblJvdXRlU2VydmljZVByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpDRU46OkNlblJvdXRlU2VydmljZWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDZW5Sb3V0ZVNlcnZpY2VQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhY2Nlc3NSZWdpb25JZDogVGhlIHJlZ2lvbiB3aGVyZSB0aGUgY2xvdWQgc2VydmljZSBpcyBkZXBsb3llZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBhY2Nlc3NSZWdpb25JZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY2VuSWQ6IFRoZSBJRCBvZiB0aGUgQ2xvdWQgRW50ZXJwcmlzZSBOZXR3b3JrIChDRU4pIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNlbklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBob3N0OiBUaGUgZG9tYWluIG9yIElQIGFkZHJlc3Mgb2YgdGhlIGNsb3VkIHNlcnZpY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaG9zdDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaG9zdFJlZ2lvbklkOiBUaGUgcmVnaW9uIHdoZXJlIHRoZSBjbG91ZCBzZXJ2aWNlIGlzIGRlcGxveWVkLlxuICAgICAqIFlvdSBjYW4gY2FsbCB0aGUgRGVzY3JpYmVSZWdpb25zIG9wZXJhdGlvbiB0byBxdWVyeSByZWdpb24gSURzLlxuICAgICAqIE5vdGUgVGhlIEhvc3RSZWdpb25JZCBhbmQgQWNjZXNzUmVnaW9uSWRzLk4gbXVzdCBiZSBzZXQgdG8gdGhlIHNhbWUgdmFsdWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaG9zdFJlZ2lvbklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBob3N0VnBjSWQ6IFRoZSB2aXJ0dWFsIHByaXZhdGUgY2xvdWQgKFZQQykgdGhhdCBpcyBhc3NvY2lhdGVkIHdpdGggdGhlIGNsb3VkIHNlcnZpY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaG9zdFZwY0lkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBjbG91ZCBzZXJ2aWNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpDRU46OkNlblJvdXRlU2VydmljZWBcbiAqL1xuZXhwb3J0IGNsYXNzIENlblJvdXRlU2VydmljZSBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSWQ6IFRoZSBJRCBvZiB0aGUgY2xvdWQgc2VydmljZS4gSXQgaXMgZm9ybWF0dGVkIHRvIHtDZW5JZH0ve0hvc3RSZWdpb25JZH0ve0hvc3R9L3tBY2Nlc3NSZWdpb25JZH1cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0cklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6Q0VOOjpDZW5Sb3V0ZVNlcnZpY2VgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IENlblJvdXRlU2VydmljZVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0NlblJvdXRlU2VydmljZSA9IG5ldyBSb3NDZW5Sb3V0ZVNlcnZpY2UodGhpcywgaWQsICB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogcHJvcHMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBob3N0UmVnaW9uSWQ6IHByb3BzLmhvc3RSZWdpb25JZCxcbiAgICAgICAgICAgIGNlbklkOiBwcm9wcy5jZW5JZCxcbiAgICAgICAgICAgIGFjY2Vzc1JlZ2lvbklkOiBwcm9wcy5hY2Nlc3NSZWdpb25JZCxcbiAgICAgICAgICAgIGhvc3Q6IHByb3BzLmhvc3QsXG4gICAgICAgICAgICBob3N0VnBjSWQ6IHByb3BzLmhvc3RWcGNJZCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NDZW5Sb3V0ZVNlcnZpY2U7XG4gICAgICAgIHRoaXMuYXR0cklkID0gcm9zQ2VuUm91dGVTZXJ2aWNlLmF0dHJJZDtcbiAgICB9XG59XG4iXX0=