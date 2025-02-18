"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDefineRegions = exports.UserDefineRegionsProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const edas_generated_1 = require("./edas.generated");
Object.defineProperty(exports, "UserDefineRegionsProperty", { enumerable: true, get: function () { return edas_generated_1.RosUserDefineRegions; } });
/**
 * A ROS resource type:  `DATASOURCE::EDAS::UserDefineRegions`
 */
class UserDefineRegions extends ros.Resource {
    /**
     * Create a new `DATASOURCE::EDAS::UserDefineRegions`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosUserDefineRegions = new edas_generated_1.RosUserDefineRegions(this, id, {}, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        props;
        this.resource = rosUserDefineRegions;
        this.attrIds = rosUserDefineRegions.attrIds;
        this.attrUserDefineRegions = rosUserDefineRegions.attrUserDefineRegions;
    }
}
exports.UserDefineRegions = UserDefineRegions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcmRlZmluZXJlZ2lvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c2VyZGVmaW5lcmVnaW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMscURBQXdEO0FBRXZCLDBHQUZ4QixxQ0FBb0IsT0FFNkI7QUFRMUQ7O0dBRUc7QUFDSCxNQUFhLGlCQUFrQixTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBaUIvQzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLFFBQWdDLEVBQUUsRUFBRSxtQ0FBMkMsSUFBSTtRQUM3SCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sb0JBQW9CLEdBQUcsSUFBSSxxQ0FBb0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHLEVBQ2hFLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLEtBQUssQ0FBQztRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQW9CLENBQUM7UUFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxvQkFBb0IsQ0FBQyxPQUFPLENBQUM7UUFDNUMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLG9CQUFvQixDQUFDLHFCQUFxQixDQUFDO0lBQzVFLENBQUM7Q0FDSjtBQWxDRCw4Q0FrQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NVc2VyRGVmaW5lUmVnaW9ucyB9IGZyb20gJy4vZWRhcy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NVc2VyRGVmaW5lUmVnaW9ucyBhcyBVc2VyRGVmaW5lUmVnaW9uc1Byb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgREFUQVNPVVJDRTo6RURBUzo6VXNlckRlZmluZVJlZ2lvbnNgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVXNlckRlZmluZVJlZ2lvbnNQcm9wcyB7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBEQVRBU09VUkNFOjpFREFTOjpVc2VyRGVmaW5lUmVnaW9uc2BcbiAqL1xuZXhwb3J0IGNsYXNzIFVzZXJEZWZpbmVSZWdpb25zIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBJZHM6IFRoZSBsaXN0IG9mIHVzZXIgZGVmaW5lIHJlZ2lvbiBJRHMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJZHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBVc2VyRGVmaW5lUmVnaW9uczogVGhlIGxpc3Qgb2YgdXNlciBkZWZpbmUgcmVnaW9ucy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clVzZXJEZWZpbmVSZWdpb25zOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYERBVEFTT1VSQ0U6OkVEQVM6OlVzZXJEZWZpbmVSZWdpb25zYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBVc2VyRGVmaW5lUmVnaW9uc1Byb3BzID0ge30sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zVXNlckRlZmluZVJlZ2lvbnMgPSBuZXcgUm9zVXNlckRlZmluZVJlZ2lvbnModGhpcywgaWQsICB7XG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICBwcm9wcztcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc1VzZXJEZWZpbmVSZWdpb25zO1xuICAgICAgICB0aGlzLmF0dHJJZHMgPSByb3NVc2VyRGVmaW5lUmVnaW9ucy5hdHRySWRzO1xuICAgICAgICB0aGlzLmF0dHJVc2VyRGVmaW5lUmVnaW9ucyA9IHJvc1VzZXJEZWZpbmVSZWdpb25zLmF0dHJVc2VyRGVmaW5lUmVnaW9ucztcbiAgICB9XG59XG4iXX0=