"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VpnRouteEntry = exports.VpnRouteEntryProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const vpc_generated_1 = require("./vpc.generated");
Object.defineProperty(exports, "VpnRouteEntryProperty", { enumerable: true, get: function () { return vpc_generated_1.RosVpnRouteEntry; } });
/**
 * A ROS resource type:  `ALIYUN::VPC::VpnRouteEntry`
 */
class VpnRouteEntry extends ros.Resource {
    /**
     * Create a new `ALIYUN::VPC::VpnRouteEntry`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosVpnRouteEntry = new vpc_generated_1.RosVpnRouteEntry(this, id, {
            description: props.description,
            routeDest: props.routeDest,
            overlayMode: props.overlayMode,
            vpnGatewayId: props.vpnGatewayId,
            nextHop: props.nextHop,
            publishVpc: props.publishVpc,
            weight: props.weight,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosVpnRouteEntry;
        this.attrNextHop = rosVpnRouteEntry.attrNextHop;
        this.attrRouteDest = rosVpnRouteEntry.attrRouteDest;
        this.attrVpnGatewayId = rosVpnRouteEntry.attrVpnGatewayId;
    }
}
exports.VpnRouteEntry = VpnRouteEntry;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnBucm91dGVlbnRyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZwbnJvdXRlZW50cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUFtRDtBQUV0QixzR0FGcEIsZ0NBQWdCLE9BRXlCO0FBNkNsRDs7R0FFRztBQUNILE1BQWEsYUFBYyxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBc0IzQzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXlCLEVBQUUsbUNBQTJDLElBQUk7UUFDcEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLGdCQUFnQixHQUFHLElBQUksZ0NBQWdCLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNyRCxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1QixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07U0FDdkIsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztRQUNoRCxJQUFJLENBQUMsYUFBYSxHQUFHLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztRQUNwRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUM7SUFDOUQsQ0FBQztDQUNKO0FBOUNELHNDQThDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc1ZwblJvdXRlRW50cnkgfSBmcm9tICcuL3ZwYy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NWcG5Sb3V0ZUVudHJ5IGFzIFZwblJvdXRlRW50cnlQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6VlBDOjpWcG5Sb3V0ZUVudHJ5YFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFZwblJvdXRlRW50cnlQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBuZXh0SG9wOiBUaGUgbmV4dCBob3Agb2YgdGhlIGRlc3RpbmF0aW9uIHJvdXRlIGVudHJ5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5leHRIb3A6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHB1Ymxpc2hWcGM6IEluZGljYXRlcyB3aGV0aGVyIHRvIHB1Ymxpc2ggdGhlIGRlc3RpbmF0aW9uIHJvdXRlIHRvIHRoZSBWUEMuIFZhbGlkIHZhbHVlczpcbiAgICAgKiB0cnVlOiBQdWJsaXNoIHRoZSBkZXN0aW5hdGlvbiByb3V0ZSB0byB0aGUgVlBDLlxuICAgICAqIGZhbHNlOiBEbyBub3QgcHVibGlzaCB0aGUgZGVzdGluYXRpb24gcm91dGUgdG8gdGhlIFZQQy5cbiAgICAgKi9cbiAgICByZWFkb25seSBwdWJsaXNoVnBjOiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcm91dGVEZXN0OiBUaGUgZGVzdGluYXRpb24gQ0lEUiBibG9jayBvZiB0aGUgZGVzdGluYXRpb24gcm91dGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcm91dGVEZXN0OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB2cG5HYXRld2F5SWQ6IFRoZSBJRCBvZiB0aGUgVlBOIEdhdGV3YXkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdnBuR2F0ZXdheUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB3ZWlnaHQ6IFRoZSB3ZWlnaHQgb2YgdGhlIGRlc3RpbmF0aW9uIHJvdXRlLiBWYWxpZCB2YWx1ZXM6IDB8MTAwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHdlaWdodDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgVlBOIGRlc3RpbmF0aW9uIHJvdXRlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgb3ZlcmxheU1vZGU6IFRoZSBvdmVybGF5IG1vZGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgb3ZlcmxheU1vZGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OlZQQzo6VnBuUm91dGVFbnRyeWBcbiAqL1xuZXhwb3J0IGNsYXNzIFZwblJvdXRlRW50cnkgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIE5leHRIb3A6IFRoZSBuZXh0IGhvcCBvZiB0aGUgZGVzdGluYXRpb24gcm91dGUgZW50cnkuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJOZXh0SG9wOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUm91dGVEZXN0OiBUaGUgZGVzdGluYXRpb24gQ0lEUiBibG9jayBvZiB0aGUgZGVzdGluYXRpb24gcm91dGUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSb3V0ZURlc3Q6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBWcG5HYXRld2F5SWQ6IFRoZSBJRCBvZiB0aGUgVlBOIEdhdGV3YXkuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJWcG5HYXRld2F5SWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpWUEM6OlZwblJvdXRlRW50cnlgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFZwblJvdXRlRW50cnlQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NWcG5Sb3V0ZUVudHJ5ID0gbmV3IFJvc1ZwblJvdXRlRW50cnkodGhpcywgaWQsICB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogcHJvcHMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICByb3V0ZURlc3Q6IHByb3BzLnJvdXRlRGVzdCxcbiAgICAgICAgICAgIG92ZXJsYXlNb2RlOiBwcm9wcy5vdmVybGF5TW9kZSxcbiAgICAgICAgICAgIHZwbkdhdGV3YXlJZDogcHJvcHMudnBuR2F0ZXdheUlkLFxuICAgICAgICAgICAgbmV4dEhvcDogcHJvcHMubmV4dEhvcCxcbiAgICAgICAgICAgIHB1Ymxpc2hWcGM6IHByb3BzLnB1Ymxpc2hWcGMsXG4gICAgICAgICAgICB3ZWlnaHQ6IHByb3BzLndlaWdodCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NWcG5Sb3V0ZUVudHJ5O1xuICAgICAgICB0aGlzLmF0dHJOZXh0SG9wID0gcm9zVnBuUm91dGVFbnRyeS5hdHRyTmV4dEhvcDtcbiAgICAgICAgdGhpcy5hdHRyUm91dGVEZXN0ID0gcm9zVnBuUm91dGVFbnRyeS5hdHRyUm91dGVEZXN0O1xuICAgICAgICB0aGlzLmF0dHJWcG5HYXRld2F5SWQgPSByb3NWcG5Sb3V0ZUVudHJ5LmF0dHJWcG5HYXRld2F5SWQ7XG4gICAgfVxufVxuIl19