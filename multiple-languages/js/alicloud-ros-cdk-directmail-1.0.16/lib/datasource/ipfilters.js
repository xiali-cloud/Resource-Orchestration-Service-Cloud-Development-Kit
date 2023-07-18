"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ipfilters = exports.IpfiltersProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const directmail_generated_1 = require("./directmail.generated");
Object.defineProperty(exports, "IpfiltersProperty", { enumerable: true, get: function () { return directmail_generated_1.RosIpfilters; } });
/**
 * A ROS resource type:  `DATASOURCE::DirectMail::Ipfilters`
 */
class Ipfilters extends ros.Resource {
    /**
     * Create a new `DATASOURCE::DirectMail::Ipfilters`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosIpfilters = new directmail_generated_1.RosIpfilters(this, id, {}, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        props;
        this.resource = rosIpfilters;
        this.attrIpfilterIds = rosIpfilters.attrIpfilterIds;
        this.attrIpfilters = rosIpfilters.attrIpfilters;
    }
}
exports.Ipfilters = Ipfilters;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXBmaWx0ZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXBmaWx0ZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxpRUFBc0Q7QUFFN0Isa0dBRmhCLG1DQUFZLE9BRXFCO0FBUTFDOztHQUVHO0FBQ0gsTUFBYSxTQUFVLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFpQnZDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsUUFBd0IsRUFBRSxFQUFFLG1DQUEyQyxJQUFJO1FBQ3JILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxZQUFZLEdBQUcsSUFBSSxtQ0FBWSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUcsRUFDaEQsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsS0FBSyxDQUFDO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUM7UUFDN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxZQUFZLENBQUMsZUFBZSxDQUFDO1FBQ3BELElBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFDLGFBQWEsQ0FBQztJQUNwRCxDQUFDO0NBQ0o7QUFsQ0QsOEJBa0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zSXBmaWx0ZXJzIH0gZnJvbSAnLi9kaXJlY3RtYWlsLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0lwZmlsdGVycyBhcyBJcGZpbHRlcnNQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYERBVEFTT1VSQ0U6OkRpcmVjdE1haWw6OklwZmlsdGVyc2BcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJcGZpbHRlcnNQcm9wcyB7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBEQVRBU09VUkNFOjpEaXJlY3RNYWlsOjpJcGZpbHRlcnNgXG4gKi9cbmV4cG9ydCBjbGFzcyBJcGZpbHRlcnMgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIElwZmlsdGVySWRzOiBUaGUgbGlzdCBvZiBpcCBmaWx0ZXIgSURzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySXBmaWx0ZXJJZHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBJcGZpbHRlcnM6IFRoZSBsaXN0IG9mIGlwIGZpbHRlcnMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJcGZpbHRlcnM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgREFUQVNPVVJDRTo6RGlyZWN0TWFpbDo6SXBmaWx0ZXJzYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBJcGZpbHRlcnNQcm9wcyA9IHt9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0lwZmlsdGVycyA9IG5ldyBSb3NJcGZpbHRlcnModGhpcywgaWQsICB7XG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICBwcm9wcztcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0lwZmlsdGVycztcbiAgICAgICAgdGhpcy5hdHRySXBmaWx0ZXJJZHMgPSByb3NJcGZpbHRlcnMuYXR0cklwZmlsdGVySWRzO1xuICAgICAgICB0aGlzLmF0dHJJcGZpbHRlcnMgPSByb3NJcGZpbHRlcnMuYXR0cklwZmlsdGVycztcbiAgICB9XG59XG4iXX0=