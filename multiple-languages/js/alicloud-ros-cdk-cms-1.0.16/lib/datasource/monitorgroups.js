"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorGroups = exports.MonitorGroupsProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const cms_generated_1 = require("./cms.generated");
Object.defineProperty(exports, "MonitorGroupsProperty", { enumerable: true, get: function () { return cms_generated_1.RosMonitorGroups; } });
/**
 * A ROS resource type:  `DATASOURCE::CMS::MonitorGroups`
 */
class MonitorGroups extends ros.Resource {
    /**
     * Create a new `DATASOURCE::CMS::MonitorGroups`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosMonitorGroups = new cms_generated_1.RosMonitorGroups(this, id, {
            type: props.type,
            dynamicTagRuleId: props.dynamicTagRuleId,
            monitorGroupName: props.monitorGroupName,
            groupId: props.groupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosMonitorGroups;
        this.attrGroupIds = rosMonitorGroups.attrGroupIds;
        this.attrMonitorGroups = rosMonitorGroups.attrMonitorGroups;
    }
}
exports.MonitorGroups = MonitorGroups;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uaXRvcmdyb3Vwcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1vbml0b3Jncm91cHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUFtRDtBQUV0QixzR0FGcEIsZ0NBQWdCLE9BRXlCO0FBK0JsRDs7R0FFRztBQUNILE1BQWEsYUFBYyxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBaUIzQzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLFFBQTRCLEVBQUUsRUFBRSxtQ0FBMkMsSUFBSTtRQUN6SCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxnQ0FBZ0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ3JELElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNoQixnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCO1lBQ3hDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxnQkFBZ0I7WUFDeEMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1NBQ3pCLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCLENBQUM7UUFDakMsSUFBSSxDQUFDLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUM7UUFDbEQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDO0lBQ2hFLENBQUM7Q0FDSjtBQXJDRCxzQ0FxQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NNb25pdG9yR3JvdXBzIH0gZnJvbSAnLi9jbXMuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zTW9uaXRvckdyb3VwcyBhcyBNb25pdG9yR3JvdXBzUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBEQVRBU09VUkNFOjpDTVM6Ok1vbml0b3JHcm91cHNgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTW9uaXRvckdyb3Vwc1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGR5bmFtaWNUYWdSdWxlSWQ6IFRoZSBJRCBvZiB0aGUgdGFnIHJ1bGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZHluYW1pY1RhZ1J1bGVJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGdyb3VwSWQ6IFRoZSBJRHMgb2YgdGhlIGFwcGxpY2F0aW9uIGdyb3Vwcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBncm91cElkPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbW9uaXRvckdyb3VwTmFtZTogVGhlIG5hbWUgb2YgdGhlIGFwcGxpY2F0aW9uIGdyb3VwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1vbml0b3JHcm91cE5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0eXBlOiBUaGUgdHlwZSBvZiB0aGUgYXBwbGljYXRpb24gZ3JvdXAuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBjdXN0b206IGEgc2VsZi1tYW5hZ2VkIGFwcGxpY2F0aW9uIGdyb3VwLlxuICAgICAqIGVocGNfY2x1c3RlcjogYW4gYXBwbGljYXRpb24gZ3JvdXAgdGhhdCBpcyBzeW5jaHJvbml6ZWQgZnJvbSBhbiBFbGFzdGljIEhpZ2ggUGVyZm9ybWFuY2UgQ29tcHV0aW5nIChFLUhQQykgY2x1c3Rlci5cbiAgICAgKiBrdWJlcm5ldGVzOiBhbiBhcHBsaWNhdGlvbiBncm91cCB0aGF0IGlzIHN5bmNocm9uaXplZCBmcm9tIGEgQ29udGFpbmVyIFNlcnZpY2UgZm9yIEt1YmVybmV0ZXMgKEFDSykgY2x1c3Rlci5cbiAgICAgKi9cbiAgICByZWFkb25seSB0eXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgREFUQVNPVVJDRTo6Q01TOjpNb25pdG9yR3JvdXBzYFxuICovXG5leHBvcnQgY2xhc3MgTW9uaXRvckdyb3VwcyBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgR3JvdXBJZHM6IFRoZSBsaXN0IG9mIGdyb3VwIElEcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckdyb3VwSWRzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgTW9uaXRvckdyb3VwczogVGhlIGxpc3Qgb2YgbW9uaXRvciBncm91cHMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJNb25pdG9yR3JvdXBzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYERBVEFTT1VSQ0U6OkNNUzo6TW9uaXRvckdyb3Vwc2AuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogTW9uaXRvckdyb3Vwc1Byb3BzID0ge30sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zTW9uaXRvckdyb3VwcyA9IG5ldyBSb3NNb25pdG9yR3JvdXBzKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgdHlwZTogcHJvcHMudHlwZSxcbiAgICAgICAgICAgIGR5bmFtaWNUYWdSdWxlSWQ6IHByb3BzLmR5bmFtaWNUYWdSdWxlSWQsXG4gICAgICAgICAgICBtb25pdG9yR3JvdXBOYW1lOiBwcm9wcy5tb25pdG9yR3JvdXBOYW1lLFxuICAgICAgICAgICAgZ3JvdXBJZDogcHJvcHMuZ3JvdXBJZCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NNb25pdG9yR3JvdXBzO1xuICAgICAgICB0aGlzLmF0dHJHcm91cElkcyA9IHJvc01vbml0b3JHcm91cHMuYXR0ckdyb3VwSWRzO1xuICAgICAgICB0aGlzLmF0dHJNb25pdG9yR3JvdXBzID0gcm9zTW9uaXRvckdyb3Vwcy5hdHRyTW9uaXRvckdyb3VwcztcbiAgICB9XG59XG4iXX0=