"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoSnapshotPolicies = exports.AutoSnapshotPoliciesProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ecs_generated_1 = require("./ecs.generated");
Object.defineProperty(exports, "AutoSnapshotPoliciesProperty", { enumerable: true, get: function () { return ecs_generated_1.RosAutoSnapshotPolicies; } });
/**
 * A ROS resource type:  `DATASOURCE::ECS::AutoSnapshotPolicies`
 */
class AutoSnapshotPolicies extends ros.Resource {
    /**
     * Create a new `DATASOURCE::ECS::AutoSnapshotPolicies`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosAutoSnapshotPolicies = new ecs_generated_1.RosAutoSnapshotPolicies(this, id, {
            resourceGroupId: props.resourceGroupId,
            autoSnapshotPolicyId: props.autoSnapshotPolicyId,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAutoSnapshotPolicies;
        this.attrAutoSnapshotPolicies = rosAutoSnapshotPolicies.attrAutoSnapshotPolicies;
        this.attrAutoSnapshotPolicyIds = rosAutoSnapshotPolicies.attrAutoSnapshotPolicyIds;
    }
}
exports.AutoSnapshotPolicies = AutoSnapshotPolicies;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b3NuYXBzaG90cG9saWNpZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRvc25hcHNob3Rwb2xpY2llcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQTBEO0FBRXRCLDZHQUYzQix1Q0FBdUIsT0FFZ0M7QUF1QmhFOztHQUVHO0FBQ0gsTUFBYSxvQkFBcUIsU0FBUSxHQUFHLENBQUMsUUFBUTtJQWlCbEQ7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxRQUFtQyxFQUFFLEVBQUUsbUNBQTJDLElBQUk7UUFDaEksS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLHVCQUF1QixHQUFHLElBQUksdUNBQXVCLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNuRSxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLG9CQUFvQjtZQUNoRCxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7U0FDbkIsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyx1QkFBdUIsQ0FBQztRQUN4QyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsdUJBQXVCLENBQUMsd0JBQXdCLENBQUM7UUFDakYsSUFBSSxDQUFDLHlCQUF5QixHQUFHLHVCQUF1QixDQUFDLHlCQUF5QixDQUFDO0lBQ3ZGLENBQUM7Q0FDSjtBQXBDRCxvREFvQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NBdXRvU25hcHNob3RQb2xpY2llcyB9IGZyb20gJy4vZWNzLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0F1dG9TbmFwc2hvdFBvbGljaWVzIGFzIEF1dG9TbmFwc2hvdFBvbGljaWVzUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBEQVRBU09VUkNFOjpFQ1M6OkF1dG9TbmFwc2hvdFBvbGljaWVzYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEF1dG9TbmFwc2hvdFBvbGljaWVzUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYXV0b1NuYXBzaG90UG9saWN5SWQ6IFRoZSBJRCBvZiB0aGUgYXV0b21hdGljIHNuYXBzaG90IHBvbGljeS5cbiAgICAgKi9cbiAgICByZWFkb25seSBhdXRvU25hcHNob3RQb2xpY3lJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJlc291cmNlR3JvdXBJZDogVGhlIElEIG9mIHRoZSByZXNvdXJjZSBncm91cCB0byB3aGljaCB0aGUgYXV0b21hdGljIHNuYXBzaG90IHBvbGljeSBiZWxvbmdzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlc291cmNlR3JvdXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRhZ3M6IFRhZ3Mgb2Ygc25hcHNob3Rwb2xpY3kuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFncz86IFJvc0F1dG9TbmFwc2hvdFBvbGljaWVzLlRhZ3NQcm9wZXJ0eVtdO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgREFUQVNPVVJDRTo6RUNTOjpBdXRvU25hcHNob3RQb2xpY2llc2BcbiAqL1xuZXhwb3J0IGNsYXNzIEF1dG9TbmFwc2hvdFBvbGljaWVzIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBBdXRvU25hcHNob3RQb2xpY2llczogVGhlIGxpc3Qgb2YgYXV0byBzbmFwc2hvdCBwb2xpY2llcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckF1dG9TbmFwc2hvdFBvbGljaWVzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQXV0b1NuYXBzaG90UG9saWN5SWRzOiBUaGUgbGlzdCBvZiBhdXRvIHNuYXBzaG90IHBvbGljeSBpZHMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBdXRvU25hcHNob3RQb2xpY3lJZHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgREFUQVNPVVJDRTo6RUNTOjpBdXRvU25hcHNob3RQb2xpY2llc2AuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogQXV0b1NuYXBzaG90UG9saWNpZXNQcm9wcyA9IHt9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0F1dG9TbmFwc2hvdFBvbGljaWVzID0gbmV3IFJvc0F1dG9TbmFwc2hvdFBvbGljaWVzKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgcmVzb3VyY2VHcm91cElkOiBwcm9wcy5yZXNvdXJjZUdyb3VwSWQsXG4gICAgICAgICAgICBhdXRvU25hcHNob3RQb2xpY3lJZDogcHJvcHMuYXV0b1NuYXBzaG90UG9saWN5SWQsXG4gICAgICAgICAgICB0YWdzOiBwcm9wcy50YWdzLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0F1dG9TbmFwc2hvdFBvbGljaWVzO1xuICAgICAgICB0aGlzLmF0dHJBdXRvU25hcHNob3RQb2xpY2llcyA9IHJvc0F1dG9TbmFwc2hvdFBvbGljaWVzLmF0dHJBdXRvU25hcHNob3RQb2xpY2llcztcbiAgICAgICAgdGhpcy5hdHRyQXV0b1NuYXBzaG90UG9saWN5SWRzID0gcm9zQXV0b1NuYXBzaG90UG9saWNpZXMuYXR0ckF1dG9TbmFwc2hvdFBvbGljeUlkcztcbiAgICB9XG59XG4iXX0=