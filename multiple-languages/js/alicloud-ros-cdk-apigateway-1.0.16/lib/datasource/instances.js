"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instances = exports.InstancesProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const apigateway_generated_1 = require("./apigateway.generated");
Object.defineProperty(exports, "InstancesProperty", { enumerable: true, get: function () { return apigateway_generated_1.RosInstances; } });
/**
 * A ROS resource type:  `DATASOURCE::ApiGateway::Instances`
 */
class Instances extends ros.Resource {
    /**
     * Create a new `DATASOURCE::ApiGateway::Instances`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosInstances = new apigateway_generated_1.RosInstances(this, id, {
            language: props.language,
            instanceId: props.instanceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstances;
        this.attrApiGatewayInstanceIds = rosInstances.attrApiGatewayInstanceIds;
        this.attrApiGatewayInstances = rosInstances.attrApiGatewayInstances;
    }
}
exports.Instances = Instances;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFuY2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW5zdGFuY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxpRUFBc0Q7QUFFN0Isa0dBRmhCLG1DQUFZLE9BRXFCO0FBa0IxQzs7R0FFRztBQUNILE1BQWEsU0FBVSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBaUJ2Qzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLFFBQXdCLEVBQUUsRUFBRSxtQ0FBMkMsSUFBSTtRQUNySCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sWUFBWSxHQUFHLElBQUksbUNBQVksQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQzdDLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN4QixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7U0FDL0IsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUM7UUFDN0IsSUFBSSxDQUFDLHlCQUF5QixHQUFHLFlBQVksQ0FBQyx5QkFBeUIsQ0FBQztRQUN4RSxJQUFJLENBQUMsdUJBQXVCLEdBQUcsWUFBWSxDQUFDLHVCQUF1QixDQUFDO0lBQ3hFLENBQUM7Q0FDSjtBQW5DRCw4QkFtQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NJbnN0YW5jZXMgfSBmcm9tICcuL2FwaWdhdGV3YXkuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zSW5zdGFuY2VzIGFzIEluc3RhbmNlc1Byb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgREFUQVNPVVJDRTo6QXBpR2F0ZXdheTo6SW5zdGFuY2VzYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEluc3RhbmNlc1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGluc3RhbmNlSWQ6IEFQSSBHYXRld2F5IEluc3RhbmNlIElELlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBsYW5ndWFnZTogTGFuZ3VhZ2UgVHlwZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBsYW5ndWFnZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYERBVEFTT1VSQ0U6OkFwaUdhdGV3YXk6Okluc3RhbmNlc2BcbiAqL1xuZXhwb3J0IGNsYXNzIEluc3RhbmNlcyBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQXBpR2F0ZXdheUluc3RhbmNlSWRzOiBUaGUgbGlzdCBvZiBUaGUgQXBpR2F0ZXdheSBncm91cCBpZHMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBcGlHYXRld2F5SW5zdGFuY2VJZHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBBcGlHYXRld2F5SW5zdGFuY2VzOiBUaGUgaW5mb3JtYXRpb24gYWJvdXQgQXBpR2F0ZXdheSBncm91cHMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBcGlHYXRld2F5SW5zdGFuY2VzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYERBVEFTT1VSQ0U6OkFwaUdhdGV3YXk6Okluc3RhbmNlc2AuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogSW5zdGFuY2VzUHJvcHMgPSB7fSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NJbnN0YW5jZXMgPSBuZXcgUm9zSW5zdGFuY2VzKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgbGFuZ3VhZ2U6IHByb3BzLmxhbmd1YWdlLFxuICAgICAgICAgICAgaW5zdGFuY2VJZDogcHJvcHMuaW5zdGFuY2VJZCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NJbnN0YW5jZXM7XG4gICAgICAgIHRoaXMuYXR0ckFwaUdhdGV3YXlJbnN0YW5jZUlkcyA9IHJvc0luc3RhbmNlcy5hdHRyQXBpR2F0ZXdheUluc3RhbmNlSWRzO1xuICAgICAgICB0aGlzLmF0dHJBcGlHYXRld2F5SW5zdGFuY2VzID0gcm9zSW5zdGFuY2VzLmF0dHJBcGlHYXRld2F5SW5zdGFuY2VzO1xuICAgIH1cbn1cbiJdfQ==