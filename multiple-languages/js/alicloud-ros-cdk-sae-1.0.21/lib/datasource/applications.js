"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Applications = exports.ApplicationsProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const sae_generated_1 = require("./sae.generated");
Object.defineProperty(exports, "ApplicationsProperty", { enumerable: true, get: function () { return sae_generated_1.RosApplications; } });
/**
 * A ROS resource type:  `DATASOURCE::SAE::Applications`
 */
class Applications extends ros.Resource {
    /**
     * Create a new `DATASOURCE::SAE::Applications`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosApplications = new sae_generated_1.RosApplications(this, id, {
            namespaceId: props.namespaceId,
            fieldValue: props.fieldValue,
            appName: props.appName,
            fieldType: props.fieldType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosApplications;
        this.attrApplicationIds = rosApplications.attrApplicationIds;
        this.attrApplications = rosApplications.attrApplications;
    }
}
exports.Applications = Applications;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwbGljYXRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBa0Q7QUFFdEIscUdBRm5CLCtCQUFlLE9BRXdCO0FBZ0NoRDs7R0FFRztBQUNILE1BQWEsWUFBYSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBaUIxQzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLFFBQTJCLEVBQUUsRUFBRSxtQ0FBMkMsSUFBSTtRQUN4SCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sZUFBZSxHQUFHLElBQUksK0JBQWUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ25ELFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztTQUM3QixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQztRQUNoQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsZUFBZSxDQUFDLGtCQUFrQixDQUFDO1FBQzdELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxlQUFlLENBQUMsZ0JBQWdCLENBQUM7SUFDN0QsQ0FBQztDQUNKO0FBckNELG9DQXFDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0FwcGxpY2F0aW9ucyB9IGZyb20gJy4vc2FlLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0FwcGxpY2F0aW9ucyBhcyBBcHBsaWNhdGlvbnNQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYERBVEFTT1VSQ0U6OlNBRTo6QXBwbGljYXRpb25zYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFwcGxpY2F0aW9uc1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGFwcE5hbWU6IFRoZSBuYW1lIG9mIGFwcGxpY2F0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFwcE5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBmaWVsZFR5cGU6IFNldCB0aGUgZGltZW5zaW9uIG9mIHRoZSBmaWx0ZXIgYXBwbGljYXRpb24uIFZhbGlkIHZhbHVlczpcbiAgICAgKiBhcHBOYW1lOiBUaGUgYXBwbGljYXRpb24gbmFtZS5cbiAgICAgKiBhcHBJZHM6IEFwcCBJRHMuXG4gICAgICogc2xiSXBzOiBTTEIgSVAgYWRkcmVzcy5cbiAgICAgKiBpbnN0YW5jZUlwczogSW5zdGFuY2UgSVAgYWRkcmVzcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBmaWVsZFR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBmaWVsZFZhbHVlOiBFbnRlciB0aGUgYXBwbGljYXRpb24gbmFtZSwgYXBwbGljYXRpb24gSUQsIFNMQiBJUCBhZGRyZXNzLCBvciBpbnN0YW5jZSBJUCBhZGRyZXNzIG9mIHRoZSB0YXJnZXQgYXBwbGljYXRpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgZmllbGRWYWx1ZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG5hbWVzcGFjZUlkOiBUaGUgSUQgb2YgbmFtZXNwYWNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hbWVzcGFjZUlkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgREFUQVNPVVJDRTo6U0FFOjpBcHBsaWNhdGlvbnNgXG4gKi9cbmV4cG9ydCBjbGFzcyBBcHBsaWNhdGlvbnMgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEFwcGxpY2F0aW9uSWRzOiBUaGUgbGlzdCBvZiBhcHBsaWNhdGlvbiBJRHMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBcHBsaWNhdGlvbklkczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEFwcGxpY2F0aW9uczogVGhlIGxpc3Qgb2YgYXBwbGljYXRpb25zLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQXBwbGljYXRpb25zOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYERBVEFTT1VSQ0U6OlNBRTo6QXBwbGljYXRpb25zYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBBcHBsaWNhdGlvbnNQcm9wcyA9IHt9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0FwcGxpY2F0aW9ucyA9IG5ldyBSb3NBcHBsaWNhdGlvbnModGhpcywgaWQsICB7XG4gICAgICAgICAgICBuYW1lc3BhY2VJZDogcHJvcHMubmFtZXNwYWNlSWQsXG4gICAgICAgICAgICBmaWVsZFZhbHVlOiBwcm9wcy5maWVsZFZhbHVlLFxuICAgICAgICAgICAgYXBwTmFtZTogcHJvcHMuYXBwTmFtZSxcbiAgICAgICAgICAgIGZpZWxkVHlwZTogcHJvcHMuZmllbGRUeXBlLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0FwcGxpY2F0aW9ucztcbiAgICAgICAgdGhpcy5hdHRyQXBwbGljYXRpb25JZHMgPSByb3NBcHBsaWNhdGlvbnMuYXR0ckFwcGxpY2F0aW9uSWRzO1xuICAgICAgICB0aGlzLmF0dHJBcHBsaWNhdGlvbnMgPSByb3NBcHBsaWNhdGlvbnMuYXR0ckFwcGxpY2F0aW9ucztcbiAgICB9XG59XG4iXX0=