"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtocolService = exports.ProtocolServiceProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const nas_generated_1 = require("./nas.generated");
Object.defineProperty(exports, "ProtocolServiceProperty", { enumerable: true, get: function () { return nas_generated_1.RosProtocolService; } });
/**
 * A ROS resource type:  `ALIYUN::NAS::ProtocolService`
 */
class ProtocolService extends ros.Resource {
    /**
     * Create a new `ALIYUN::NAS::ProtocolService`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosProtocolService = new nas_generated_1.RosProtocolService(this, id, {
            description: props.description,
            vpcId: props.vpcId,
            protocolType: props.protocolType === undefined || props.protocolType === null ? 'NFS' : props.protocolType,
            protocolSpec: props.protocolSpec === undefined || props.protocolSpec === null ? 'General' : props.protocolSpec,
            vSwitchId: props.vSwitchId,
            fileSystemId: props.fileSystemId,
            throughput: props.throughput,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosProtocolService;
        this.attrFileSystemId = rosProtocolService.attrFileSystemId;
        this.attrProtocolServiceId = rosProtocolService.attrProtocolServiceId;
    }
}
exports.ProtocolService = ProtocolService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdG9jb2xzZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvdG9jb2xzZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBcUQ7QUFFdEIsd0dBRnRCLGtDQUFrQixPQUUyQjtBQW1EdEQ7O0dBRUc7QUFDSCxNQUFhLGVBQWdCLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFpQjdDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBMkIsRUFBRSxtQ0FBMkMsSUFBSTtRQUN0SCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxrQ0FBa0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ3pELFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7WUFDbEIsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxZQUFZLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZO1lBQzFHLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWSxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsWUFBWSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWTtZQUM5RyxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1lBQ2hDLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtTQUMvQixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLGtCQUFrQixDQUFDO1FBQ25DLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQztRQUM1RCxJQUFJLENBQUMscUJBQXFCLEdBQUcsa0JBQWtCLENBQUMscUJBQXFCLENBQUM7SUFDMUUsQ0FBQztDQUNKO0FBeENELDBDQXdDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc1Byb3RvY29sU2VydmljZSB9IGZyb20gJy4vbmFzLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc1Byb3RvY29sU2VydmljZSBhcyBQcm90b2NvbFNlcnZpY2VQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6TkFTOjpQcm90b2NvbFNlcnZpY2VgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUHJvdG9jb2xTZXJ2aWNlUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZmlsZVN5c3RlbUlkOiBGaWxlIHN5c3RlbSBJRC5cbiAgICAgKi9cbiAgICByZWFkb25seSBmaWxlU3lzdGVtSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHByb3RvY29sU3BlYzogVGhlIHNwZWMgb2YgcHJvdG9jb2wgc2VydmljZS4gRGVmYXVsdDogR2VuZXJhbC4gVmFsdWVzOiBHZW5lcmFsXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJvdG9jb2xTcGVjOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwcm90b2NvbFR5cGU6IFRoZSBwcm90b2NvbCB0eXBlIG9mIGFncmVlbWVudCBzZXJ2aWNlLlxuICAgICAqIFJhbmdlczpcbiAgICAgKiBORlM6IEFncmVlbWVudCBzZXJ2aWNlIHN1cHBvcnRzIE5GUyBwcm90b2NvbCBhY2Nlc3MuXG4gICAgICogVGhlIGRlZmF1bHQgdmFsdWU6IE5GUy5cbiAgICAgKi9cbiAgICByZWFkb25seSBwcm90b2NvbFR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHZwY0lkOiBUaGUgcHJvdG9jb2wgc2VydmljZSBWUENJRCBuZWVkcyB0byBiZSBjb25zaXN0ZW50IHdpdGggdGhlIGZpbGUgc3lzdGVtIFZQQy5cbiAgICAgKi9cbiAgICByZWFkb25seSB2cGNJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdlN3aXRjaElkOiBBZ3JlZW1lbnQgc2VydmljZSB2c3dpdGNoaWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdlN3aXRjaElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogRGVzY3JpcHRpb24gb2YgcHJvdG9jb2wgc2VydmljZS5UaGUgY29uc29sZSBzaG93cyB0aGUgXCJwcm90b2NvbCBzZXJ2aWNlIG5hbWVcIi5cbiAgICAgKiBsaW1pdDpcbiAgICAgKiBUaGUgbGVuZ3RoIGlzIDIgdG8gMTI4IEVuZ2xpc2ggb3IgQ2hpbmVzZSBjaGFyYWN0ZXJzLlxuICAgICAqIFN0YXJ0IHdpdGggYSBsb3dlcmNhc2UgbGV0dGVyIG9yIENoaW5lc2UsIGFuZCB5b3UgY2Fubm90IHN0YXJ0IHdpdGggaHR0cDovLyBhbmQgaHR0cHM6IC8vLlxuICAgICAqIEl0IGNhbiBjb250YWluIG51bWJlcnMsIGhhbGYtaG9ybiBjb2xvbiAoOiksIGRvd24gbGluZSAoXykgb3Igc2hvcnQgbGluZXMgKC0pLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdGhyb3VnaHB1dDogVGhlIGJhbmR3aWR0aCBvZiB0aGUgYWdyZWVtZW50IHNlcnZpY2UuXG4gICAgICogVW5pdDogTUIvUy5cbiAgICAgKi9cbiAgICByZWFkb25seSB0aHJvdWdocHV0PzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpOQVM6OlByb3RvY29sU2VydmljZWBcbiAqL1xuZXhwb3J0IGNsYXNzIFByb3RvY29sU2VydmljZSBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRmlsZVN5c3RlbUlkOiBGaWxlIHN5c3RlbSBJRC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckZpbGVTeXN0ZW1JZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFByb3RvY29sU2VydmljZUlkOiBBZ3JlZW1lbnQgY2x1c3RlciBncm91cCBJRC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clByb3RvY29sU2VydmljZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6TkFTOjpQcm90b2NvbFNlcnZpY2VgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFByb3RvY29sU2VydmljZVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc1Byb3RvY29sU2VydmljZSA9IG5ldyBSb3NQcm90b2NvbFNlcnZpY2UodGhpcywgaWQsICB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogcHJvcHMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICB2cGNJZDogcHJvcHMudnBjSWQsXG4gICAgICAgICAgICBwcm90b2NvbFR5cGU6IHByb3BzLnByb3RvY29sVHlwZSA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLnByb3RvY29sVHlwZSA9PT0gbnVsbCA/ICdORlMnIDogcHJvcHMucHJvdG9jb2xUeXBlLFxuICAgICAgICAgICAgcHJvdG9jb2xTcGVjOiBwcm9wcy5wcm90b2NvbFNwZWMgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5wcm90b2NvbFNwZWMgPT09IG51bGwgPyAnR2VuZXJhbCcgOiBwcm9wcy5wcm90b2NvbFNwZWMsXG4gICAgICAgICAgICB2U3dpdGNoSWQ6IHByb3BzLnZTd2l0Y2hJZCxcbiAgICAgICAgICAgIGZpbGVTeXN0ZW1JZDogcHJvcHMuZmlsZVN5c3RlbUlkLFxuICAgICAgICAgICAgdGhyb3VnaHB1dDogcHJvcHMudGhyb3VnaHB1dCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NQcm90b2NvbFNlcnZpY2U7XG4gICAgICAgIHRoaXMuYXR0ckZpbGVTeXN0ZW1JZCA9IHJvc1Byb3RvY29sU2VydmljZS5hdHRyRmlsZVN5c3RlbUlkO1xuICAgICAgICB0aGlzLmF0dHJQcm90b2NvbFNlcnZpY2VJZCA9IHJvc1Byb3RvY29sU2VydmljZS5hdHRyUHJvdG9jb2xTZXJ2aWNlSWQ7XG4gICAgfVxufVxuIl19