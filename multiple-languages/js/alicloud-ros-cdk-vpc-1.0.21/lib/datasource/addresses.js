"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Addresses = exports.AddressesProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const vpc_generated_1 = require("./vpc.generated");
Object.defineProperty(exports, "AddressesProperty", { enumerable: true, get: function () { return vpc_generated_1.RosAddresses; } });
/**
 * A ROS resource type:  `DATASOURCE::EIP::Addresses`
 */
class Addresses extends ros.Resource {
    /**
     * Create a new `DATASOURCE::EIP::Addresses`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosAddresses = new vpc_generated_1.RosAddresses(this, id, {
            segmentInstanceId: props.segmentInstanceId,
            addressName: props.addressName,
            resourceGroupId: props.resourceGroupId,
            instanceId: props.instanceId,
            isp: props.isp,
            allocationId: props.allocationId,
            paymentType: props.paymentType,
            ipAddress: props.ipAddress,
            instanceType: props.instanceType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAddresses;
        this.attrAddresses = rosAddresses.attrAddresses;
        this.attrAllocationIds = rosAddresses.attrAllocationIds;
    }
}
exports.Addresses = Addresses;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzc2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRkcmVzc2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBK0M7QUFFdEIsa0dBRmhCLDRCQUFZLE9BRXFCO0FBd0UxQzs7R0FFRztBQUNILE1BQWEsU0FBVSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBaUJ2Qzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLFFBQXdCLEVBQUUsRUFBRSxtQ0FBMkMsSUFBSTtRQUNySCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sWUFBWSxHQUFHLElBQUksNEJBQVksQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQzdDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUI7WUFDMUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHO1lBQ2QsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1lBQ2hDLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1NBQ25DLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDO1FBQzdCLElBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFDLGFBQWEsQ0FBQztRQUNoRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsWUFBWSxDQUFDLGlCQUFpQixDQUFDO0lBQzVELENBQUM7Q0FDSjtBQTFDRCw4QkEwQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NBZGRyZXNzZXMgfSBmcm9tICcuL3ZwYy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NBZGRyZXNzZXMgYXMgQWRkcmVzc2VzUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBEQVRBU09VUkNFOjpFSVA6OkFkZHJlc3Nlc2BcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBZGRyZXNzZXNQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhZGRyZXNzTmFtZTogVGhlIG5hbWUgb2YgdGhlIEVJUC5cbiAgICAgKi9cbiAgICByZWFkb25seSBhZGRyZXNzTmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGFsbG9jYXRpb25JZDogVGhlIElEIG9mIHRoZSBFSVAgdGhhdCB5b3Ugd2FudCB0byBxdWVyeS5cbiAgICAgKi9cbiAgICByZWFkb25seSBhbGxvY2F0aW9uSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbnN0YW5jZUlkOiBUaGUgSUQgb2YgdGhlIGNsb3VkIHJlc291cmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbnN0YW5jZVR5cGU6IFRoZSB0eXBlIG9mIHRoZSBjdXJyZW50IGJvdW5kIGluc3RhbmNlLlxuICAgICAqIC0gKipFY3NJbnN0YW5jZSoqOiBhbiBFQ1MgaW5zdGFuY2Ugb2YgdGhlIFZQQyB0eXBlLlxuICAgICAqIC0gKipTbGJJbnN0YW5jZSoqOiBhbiBTTEIgaW5zdGFuY2Ugb2YgdGhlIFZQQyB0eXBlLlxuICAgICAqIC0gKipOYXQqKjpOQVQgZ2F0ZXdheS5cbiAgICAgKiAtICoqSGFWaXAqKjogYSBoaWdobHkgYXZhaWxhYmxlIHZpcnR1YWwgSVAgYWRkcmVzcy5cbiAgICAgKiAtICoqTmV0d29ya0ludGVyZmFjZSoqOiBTZWNvbmRhcnkgRU5JLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGlwQWRkcmVzczogVGhlIElQIGFkZHJlc3MgcG9vbCB0byB3aGljaCB0aGUgRUlQIHRoYXQgeW91IHdhbnQgdG8gcXVlcnkgYmVsb25ncy5cbiAgICAgKi9cbiAgICByZWFkb25seSBpcEFkZHJlc3M/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpc3A6IFRoZSBsaW5lIHR5cGUuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBCR1AgKGRlZmF1bHQpOiBCR1AgKE11bHRpLUlTUCkgbGluZXMuIEFsbCByZWdpb25zIHN1cHBvcnQgQkdQIChNdWx0aS1JU1ApIEVJUHMuXG4gICAgICogQkdQX1BSTzogQkdQIChNdWx0aS1JU1ApIFBybyBsaW5lcy4gXG4gICAgICogT25seSB0aGUgZm9sbG93aW5nIHJlZ2lvbnMgc3VwcG9ydCBCR1AgKE11bHRpLUlTUCkgUHJvIGxpbmVzOiBcbiAgICAgKiBDaGluYSAoSG9uZyBLb25nKSwgU2luZ2Fwb3JlLCBNYWxheXNpYSAoS3VhbGEgTHVtcHVyKSwgUGhpbGlwcGluZXMgKE1hbmlsYSksIEluZG9uZXNpYSAoSmFrYXJ0YSksIGFuZCBUaGFpbGFuZCAoQmFuZ2tvaykuXG4gICAgICogRm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgQkdQIChNdWx0aS1JU1ApIGFuZCBCR1AgKE11bHRpLUlTUCkgUHJvLCBzZWUgRUlQIGxpbmUgdHlwZXMuXG4gICAgICogSWYgeW91IGFyZSBhbGxvd2VkIHRvIHVzZSBzaW5nbGUtSVNQIGJhbmR3aWR0aCwgeW91IGNhbiBhbHNvIGNob29zZSBvbmUgb2YgdGhlIGZvbGxvd2luZyB2YWx1ZXM6XG4gICAgICogQ2hpbmFUZWxlY29tOiBDaGluYSBUZWxlY29tXG4gICAgICogQ2hpbmFVbmljb206IENoaW5hIFVuaWNvbVxuICAgICAqIENoaW5hTW9iaWxlOiBDaGluYSBNb2JpbGVcbiAgICAgKiBDaGluYVRlbGVjb21fTDI6IENoaW5hIFRlbGVjb20gTDJcbiAgICAgKiBDaGluYVVuaWNvbV9MMjogQ2hpbmEgVW5pY29tIEwyXG4gICAgICogQ2hpbmFNb2JpbGVfTDI6IENoaW5hIE1vYmlsZSBMMlxuICAgICAqIElmIHlvdXIgc2VydmljZXMgYXJlIGRlcGxveWVkIGluIENoaW5hIEVhc3QgMSBGaW5hbmNlLCB5b3UgbXVzdCBzZXQgdGhpcyBwYXJhbWV0ZXIgdG8gQkdQX0ZpbmFuY2VDbG91ZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBpc3A/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwYXltZW50VHlwZTogVGhlIGJpbGxpbmcgbWV0aG9kIG9mIHRoZSBFSVAuIFZhbGlkIHZhbHVlczogIFByZVBhaWQ6IHN1YnNjcmlwdGlvbiBQb3N0UGFpZDogcGF5LWFzLXlvdS1nby5cbiAgICAgKi9cbiAgICByZWFkb25seSBwYXltZW50VHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJlc291cmNlR3JvdXBJZDogVGhlIElEIG9mIHRoZSByZXNvdXJjZSBncm91cCB0byB3aGljaCB0aGUgRUlQcyBiZWxvbmcuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzb3VyY2VHcm91cElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc2VnbWVudEluc3RhbmNlSWQ6IFRoZSBJRCBvZiB0aGUgY29uc2VjdXRpdmUgRUlQcy5cbiAgICAgKiBUaGlzIHBhcmFtZXRlciB2YWx1ZSBpcyByZXR1cm5lZCBvbmx5IGlmIHRoZSBFSVAgaXMgYSBjb250aW51b3VzIEVJUC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzZWdtZW50SW5zdGFuY2VJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYERBVEFTT1VSQ0U6OkVJUDo6QWRkcmVzc2VzYFxuICovXG5leHBvcnQgY2xhc3MgQWRkcmVzc2VzIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBBZGRyZXNzZXM6IFRoZSBkZXRhaWxzIGFib3V0IHRoZSBFSVBcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFkZHJlc3Nlczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEFsbG9jYXRpb25JZHM6IFRoZSBsaXN0IG9mIGFsbG9jYXRpb24gSURzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQWxsb2NhdGlvbklkczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBEQVRBU09VUkNFOjpFSVA6OkFkZHJlc3Nlc2AuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogQWRkcmVzc2VzUHJvcHMgPSB7fSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NBZGRyZXNzZXMgPSBuZXcgUm9zQWRkcmVzc2VzKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgc2VnbWVudEluc3RhbmNlSWQ6IHByb3BzLnNlZ21lbnRJbnN0YW5jZUlkLFxuICAgICAgICAgICAgYWRkcmVzc05hbWU6IHByb3BzLmFkZHJlc3NOYW1lLFxuICAgICAgICAgICAgcmVzb3VyY2VHcm91cElkOiBwcm9wcy5yZXNvdXJjZUdyb3VwSWQsXG4gICAgICAgICAgICBpbnN0YW5jZUlkOiBwcm9wcy5pbnN0YW5jZUlkLFxuICAgICAgICAgICAgaXNwOiBwcm9wcy5pc3AsXG4gICAgICAgICAgICBhbGxvY2F0aW9uSWQ6IHByb3BzLmFsbG9jYXRpb25JZCxcbiAgICAgICAgICAgIHBheW1lbnRUeXBlOiBwcm9wcy5wYXltZW50VHlwZSxcbiAgICAgICAgICAgIGlwQWRkcmVzczogcHJvcHMuaXBBZGRyZXNzLFxuICAgICAgICAgICAgaW5zdGFuY2VUeXBlOiBwcm9wcy5pbnN0YW5jZVR5cGUsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zQWRkcmVzc2VzO1xuICAgICAgICB0aGlzLmF0dHJBZGRyZXNzZXMgPSByb3NBZGRyZXNzZXMuYXR0ckFkZHJlc3NlcztcbiAgICAgICAgdGhpcy5hdHRyQWxsb2NhdGlvbklkcyA9IHJvc0FkZHJlc3Nlcy5hdHRyQWxsb2NhdGlvbklkcztcbiAgICB9XG59XG4iXX0=