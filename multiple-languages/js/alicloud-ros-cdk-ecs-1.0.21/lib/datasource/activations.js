"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Activations = exports.ActivationsProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ecs_generated_1 = require("./ecs.generated");
Object.defineProperty(exports, "ActivationsProperty", { enumerable: true, get: function () { return ecs_generated_1.RosActivations; } });
/**
 * A ROS resource type:  `DATASOURCE::ECS::Activations`
 */
class Activations extends ros.Resource {
    /**
     * Create a new `DATASOURCE::ECS::Activations`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosActivations = new ecs_generated_1.RosActivations(this, id, {
            instanceName: props.instanceName,
            activationId: props.activationId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosActivations;
        this.attrActivationIds = rosActivations.attrActivationIds;
        this.attrActivations = rosActivations.attrActivations;
    }
}
exports.Activations = Activations;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZhdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY3RpdmF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQWlEO0FBRXRCLG9HQUZsQiw4QkFBYyxPQUV1QjtBQWtCOUM7O0dBRUc7QUFDSCxNQUFhLFdBQVksU0FBUSxHQUFHLENBQUMsUUFBUTtJQWlCekM7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxRQUEwQixFQUFFLEVBQUUsbUNBQTJDLElBQUk7UUFDdkgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLGNBQWMsR0FBRyxJQUFJLDhCQUFjLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNqRCxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1NBQ25DLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsY0FBYyxDQUFDO1FBQy9CLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxjQUFjLENBQUMsaUJBQWlCLENBQUM7UUFDMUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxjQUFjLENBQUMsZUFBZSxDQUFDO0lBQzFELENBQUM7Q0FDSjtBQW5DRCxrQ0FtQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NBY3RpdmF0aW9ucyB9IGZyb20gJy4vZWNzLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0FjdGl2YXRpb25zIGFzIEFjdGl2YXRpb25zUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBEQVRBU09VUkNFOjpFQ1M6OkFjdGl2YXRpb25zYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFjdGl2YXRpb25zUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYWN0aXZhdGlvbklkOiBBY3RpdmF0aW9uIGNvZGUgSUQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWN0aXZhdGlvbklkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW5zdGFuY2VOYW1lOiBUaGUgZGVmYXVsdCBwcmVmaXggb2YgdGhlIGluc3RhbmNlIG5hbWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VOYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgREFUQVNPVVJDRTo6RUNTOjpBY3RpdmF0aW9uc2BcbiAqL1xuZXhwb3J0IGNsYXNzIEFjdGl2YXRpb25zIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBBY3RpdmF0aW9uSWRzOiBUaGUgbGlzdCBvZiBhY3RpdmF0aW9uIElEcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFjdGl2YXRpb25JZHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBBY3RpdmF0aW9uczogVGhlIGxpc3Qgb2YgYWN0aXZhdGlvbnMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBY3RpdmF0aW9uczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBEQVRBU09VUkNFOjpFQ1M6OkFjdGl2YXRpb25zYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBBY3RpdmF0aW9uc1Byb3BzID0ge30sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zQWN0aXZhdGlvbnMgPSBuZXcgUm9zQWN0aXZhdGlvbnModGhpcywgaWQsICB7XG4gICAgICAgICAgICBpbnN0YW5jZU5hbWU6IHByb3BzLmluc3RhbmNlTmFtZSxcbiAgICAgICAgICAgIGFjdGl2YXRpb25JZDogcHJvcHMuYWN0aXZhdGlvbklkLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0FjdGl2YXRpb25zO1xuICAgICAgICB0aGlzLmF0dHJBY3RpdmF0aW9uSWRzID0gcm9zQWN0aXZhdGlvbnMuYXR0ckFjdGl2YXRpb25JZHM7XG4gICAgICAgIHRoaXMuYXR0ckFjdGl2YXRpb25zID0gcm9zQWN0aXZhdGlvbnMuYXR0ckFjdGl2YXRpb25zO1xuICAgIH1cbn1cbiJdfQ==