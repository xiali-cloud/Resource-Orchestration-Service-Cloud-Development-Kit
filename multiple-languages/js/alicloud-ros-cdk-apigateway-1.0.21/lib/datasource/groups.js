"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Groups = exports.GroupsProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const apigateway_generated_1 = require("./apigateway.generated");
Object.defineProperty(exports, "GroupsProperty", { enumerable: true, get: function () { return apigateway_generated_1.RosGroups; } });
/**
 * A ROS resource type:  `DATASOURCE::ApiGateway::Groups`
 */
class Groups extends ros.Resource {
    /**
     * Create a new `DATASOURCE::ApiGateway::Groups`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosGroups = new apigateway_generated_1.RosGroups(this, id, {
            groupName: props.groupName,
            instanceId: props.instanceId,
            sort: props.sort,
            groupId: props.groupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosGroups;
        this.attrApiGroupIds = rosGroups.attrApiGroupIds;
        this.attrApiGroups = rosGroups.attrApiGroups;
    }
}
exports.Groups = Groups;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXBzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ3JvdXBzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxpRUFBbUQ7QUFFN0IsK0ZBRmIsZ0NBQVMsT0FFa0I7QUE0QnBDOztHQUVHO0FBQ0gsTUFBYSxNQUFPLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFpQnBDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsUUFBcUIsRUFBRSxFQUFFLG1DQUEyQyxJQUFJO1FBQ2xILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxTQUFTLEdBQUcsSUFBSSxnQ0FBUyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDdkMsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1QixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7WUFDaEIsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1NBQ3pCLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO1FBQzFCLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDLGVBQWUsQ0FBQztRQUNqRCxJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQyxhQUFhLENBQUM7SUFDakQsQ0FBQztDQUNKO0FBckNELHdCQXFDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0dyb3VwcyB9IGZyb20gJy4vYXBpZ2F0ZXdheS5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NHcm91cHMgYXMgR3JvdXBzUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBEQVRBU09VUkNFOjpBcGlHYXRld2F5OjpHcm91cHNgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgR3JvdXBzUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZ3JvdXBJZDogQVBJIGdyb3VwIElELlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGdyb3VwSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBncm91cE5hbWU6IFNwZWNpZmllZCBrZXl3b3JkIG9mIHRoZSBBUEkgZ3JvdXAgbmFtZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBncm91cE5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbnN0YW5jZUlkOiBBUEkgR2F0ZXdheSBJbnN0YW5jZSBJRC5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZUlkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc29ydDogU29ydC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzb3J0Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgREFUQVNPVVJDRTo6QXBpR2F0ZXdheTo6R3JvdXBzYFxuICovXG5leHBvcnQgY2xhc3MgR3JvdXBzIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBBcGlHcm91cElkczogVGhlIGxpc3Qgb2YgVGhlIEFwaUdhdGV3YXkgZ3JvdXAgaWRzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQXBpR3JvdXBJZHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBBcGlHcm91cHM6IFRoZSBpbmZvcm1hdGlvbiBhYm91dCBBcGlHYXRld2F5IGdyb3Vwcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFwaUdyb3Vwczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBEQVRBU09VUkNFOjpBcGlHYXRld2F5OjpHcm91cHNgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IEdyb3Vwc1Byb3BzID0ge30sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zR3JvdXBzID0gbmV3IFJvc0dyb3Vwcyh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGdyb3VwTmFtZTogcHJvcHMuZ3JvdXBOYW1lLFxuICAgICAgICAgICAgaW5zdGFuY2VJZDogcHJvcHMuaW5zdGFuY2VJZCxcbiAgICAgICAgICAgIHNvcnQ6IHByb3BzLnNvcnQsXG4gICAgICAgICAgICBncm91cElkOiBwcm9wcy5ncm91cElkLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0dyb3VwcztcbiAgICAgICAgdGhpcy5hdHRyQXBpR3JvdXBJZHMgPSByb3NHcm91cHMuYXR0ckFwaUdyb3VwSWRzO1xuICAgICAgICB0aGlzLmF0dHJBcGlHcm91cHMgPSByb3NHcm91cHMuYXR0ckFwaUdyb3VwcztcbiAgICB9XG59XG4iXX0=