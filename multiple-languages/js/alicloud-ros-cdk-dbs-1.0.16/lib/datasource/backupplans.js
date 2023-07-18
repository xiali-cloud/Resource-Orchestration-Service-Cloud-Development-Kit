"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackupPlans = exports.BackupPlansProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const dbs_generated_1 = require("./dbs.generated");
Object.defineProperty(exports, "BackupPlansProperty", { enumerable: true, get: function () { return dbs_generated_1.RosBackupPlans; } });
/**
 * A ROS resource type:  `DATASOURCE::DBS::BackupPlans`
 */
class BackupPlans extends ros.Resource {
    /**
     * Create a new `DATASOURCE::DBS::BackupPlans`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosBackupPlans = new dbs_generated_1.RosBackupPlans(this, id, {
            backupPlanName: props.backupPlanName,
            resourceGroupId: props.resourceGroupId,
            backupPlanId: props.backupPlanId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosBackupPlans;
        this.attrBackupPlanIds = rosBackupPlans.attrBackupPlanIds;
        this.attrBackupPlans = rosBackupPlans.attrBackupPlans;
    }
}
exports.BackupPlans = BackupPlans;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja3VwcGxhbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYWNrdXBwbGFucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQWlEO0FBRXRCLG9HQUZsQiw4QkFBYyxPQUV1QjtBQXVCOUM7O0dBRUc7QUFDSCxNQUFhLFdBQVksU0FBUSxHQUFHLENBQUMsUUFBUTtJQWlCekM7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxRQUEwQixFQUFFLEVBQUUsbUNBQTJDLElBQUk7UUFDdkgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLGNBQWMsR0FBRyxJQUFJLDhCQUFjLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNqRCxjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7WUFDcEMsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtTQUNuQyxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLGNBQWMsQ0FBQztRQUMvQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsY0FBYyxDQUFDLGlCQUFpQixDQUFDO1FBQzFELElBQUksQ0FBQyxlQUFlLEdBQUcsY0FBYyxDQUFDLGVBQWUsQ0FBQztJQUMxRCxDQUFDO0NBQ0o7QUFwQ0Qsa0NBb0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zQmFja3VwUGxhbnMgfSBmcm9tICcuL2Ricy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NCYWNrdXBQbGFucyBhcyBCYWNrdXBQbGFuc1Byb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgREFUQVNPVVJDRTo6REJTOjpCYWNrdXBQbGFuc2BcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBCYWNrdXBQbGFuc1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGJhY2t1cFBsYW5JZDogVGhlIElEIG9mIHRoZSBiYWNrdXAgc2NoZWR1bGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYmFja3VwUGxhbklkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYmFja3VwUGxhbk5hbWU6IFRoZSBuYW1lIG9mIHRoZSBiYWNrdXAgc2NoZWR1bGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYmFja3VwUGxhbk5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByZXNvdXJjZUdyb3VwSWQ6IFRoZSBJRCBvZiB0aGUgcmVzb3VyY2UgZ3JvdXAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzb3VyY2VHcm91cElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgREFUQVNPVVJDRTo6REJTOjpCYWNrdXBQbGFuc2BcbiAqL1xuZXhwb3J0IGNsYXNzIEJhY2t1cFBsYW5zIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBCYWNrdXBQbGFuSWRzOiBUaGUgbGlzdCBvZiBiYWNrdXAgcGxhbiBJRHMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJCYWNrdXBQbGFuSWRzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQmFja3VwUGxhbnM6IFRoZSBsaXN0IG9mIGJhY2t1cCBwbGFucy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckJhY2t1cFBsYW5zOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYERBVEFTT1VSQ0U6OkRCUzo6QmFja3VwUGxhbnNgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IEJhY2t1cFBsYW5zUHJvcHMgPSB7fSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NCYWNrdXBQbGFucyA9IG5ldyBSb3NCYWNrdXBQbGFucyh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGJhY2t1cFBsYW5OYW1lOiBwcm9wcy5iYWNrdXBQbGFuTmFtZSxcbiAgICAgICAgICAgIHJlc291cmNlR3JvdXBJZDogcHJvcHMucmVzb3VyY2VHcm91cElkLFxuICAgICAgICAgICAgYmFja3VwUGxhbklkOiBwcm9wcy5iYWNrdXBQbGFuSWQsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zQmFja3VwUGxhbnM7XG4gICAgICAgIHRoaXMuYXR0ckJhY2t1cFBsYW5JZHMgPSByb3NCYWNrdXBQbGFucy5hdHRyQmFja3VwUGxhbklkcztcbiAgICAgICAgdGhpcy5hdHRyQmFja3VwUGxhbnMgPSByb3NCYWNrdXBQbGFucy5hdHRyQmFja3VwUGxhbnM7XG4gICAgfVxufVxuIl19