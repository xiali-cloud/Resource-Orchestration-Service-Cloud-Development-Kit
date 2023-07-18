"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KubernetesClusters = exports.KubernetesClustersProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const cs_generated_1 = require("./cs.generated");
Object.defineProperty(exports, "KubernetesClustersProperty", { enumerable: true, get: function () { return cs_generated_1.RosKubernetesClusters; } });
/**
 * A ROS resource type:  `DATASOURCE::CS::KubernetesClusters`
 */
class KubernetesClusters extends ros.Resource {
    /**
     * Create a new `DATASOURCE::CS::KubernetesClusters`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosKubernetesClusters = new cs_generated_1.RosKubernetesClusters(this, id, {
            clusterSpec: props.clusterSpec,
            clusterType: props.clusterType,
            profile: props.profile,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosKubernetesClusters;
        this.attrClusterIds = rosKubernetesClusters.attrClusterIds;
        this.attrClusters = rosKubernetesClusters.attrClusters;
    }
}
exports.KubernetesClusters = KubernetesClusters;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3ViZXJuZXRlc2NsdXN0ZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsia3ViZXJuZXRlc2NsdXN0ZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxpREFBdUQ7QUFFckIsMkdBRnpCLG9DQUFxQixPQUU4QjtBQXdDNUQ7O0dBRUc7QUFDSCxNQUFhLGtCQUFtQixTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBaUJoRDs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLFFBQWlDLEVBQUUsRUFBRSxtQ0FBMkMsSUFBSTtRQUM5SCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0scUJBQXFCLEdBQUcsSUFBSSxvQ0FBcUIsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQy9ELFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtTQUNuQixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLHFCQUFxQixDQUFDO1FBQ3RDLElBQUksQ0FBQyxjQUFjLEdBQUcscUJBQXFCLENBQUMsY0FBYyxDQUFDO1FBQzNELElBQUksQ0FBQyxZQUFZLEdBQUcscUJBQXFCLENBQUMsWUFBWSxDQUFDO0lBQzNELENBQUM7Q0FDSjtBQXJDRCxnREFxQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NLdWJlcm5ldGVzQ2x1c3RlcnMgfSBmcm9tICcuL2NzLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0t1YmVybmV0ZXNDbHVzdGVycyBhcyBLdWJlcm5ldGVzQ2x1c3RlcnNQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYERBVEFTT1VSQ0U6OkNTOjpLdWJlcm5ldGVzQ2x1c3RlcnNgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgS3ViZXJuZXRlc0NsdXN0ZXJzUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY2x1c3RlclNwZWM6IFRoZSBzcGVjaWZpY2F0aW9uIG9mIHRoZSBjbHVzdGVyLiBJZiB5b3Ugc2V0IHRoZSBjbHVzdGVyIHR5cGUgdG8gTWFuYWdlZEt1YmVybmV0ZXMsIHlvdSBjYW4gdXNlIGNsdXN0ZXIgc3BlY2lmaWNhdGlvbnMgdG8gZGlzdGluZ3Vpc2ggY2x1c3RlcnMuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBhY2sucHJvLnNtYWxsOiBwcm9mZXNzaW9uYWwgbWFuYWdlZCBLdWJlcm5ldGVzIGNsdXN0ZXJcbiAgICAgKiBhY2suc3RhbmRhcmQ6IHN0YW5kYXJkIG1hbmFnZWQgS3ViZXJuZXRlcyBjbHVzdGVyXG4gICAgICogQnkgZGVmYXVsdCwgdGhpcyBwYXJhbWV0ZXIgaXMgZW1wdHkuIFRoaXMgaW5kaWNhdGVzIHRoYXQgdGhlIHBhcmFtZXRlciBpcyBub3QgdXNlZCB0byBmaWx0ZXIgY2x1c3RlcnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2x1c3RlclNwZWM/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjbHVzdGVyVHlwZTogVGhlIHR5cGUgb2YgdGhlIGNsdXN0ZXIuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBLdWJlcm5ldGVzOiBkZWRpY2F0ZWQgS3ViZXJuZXRlcyBjbHVzdGVyXG4gICAgICogTWFuYWdlZEt1YmVybmV0ZXM6IG1hbmFnZWQgS3ViZXJuZXRlcyBjbHVzdGVyLCBzZXJ2ZXJsZXNzIEt1YmVybmV0ZXMgKEFTSykgY2x1c3Rlciwgb3IgZWRnZSBLdWJlcm5ldGVzIGNsdXN0ZXJcbiAgICAgKiBBc2s6IEFTSyBjbHVzdGVyXG4gICAgICogRXh0ZXJuYWxLdWJlcm5ldGVzOiByZWdpc3RlcmVkIGV4dGVybmFsIGNsdXN0ZXJcbiAgICAgKiBXaGVuIHlvdSBxdWVyeSBhbiBBU0sgY2x1c3RlciwgdGhlIHZhbHVlIHNwZWNpZmllZCB3aGVuIHRoZSBjbHVzdGVyIHdhcyBjcmVhdGVkIGlzIHJldHVybmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNsdXN0ZXJUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbmFtZTogVGhlIG5hbWUgb2YgdGhlIGNsdXN0ZXIuVGhlIG5hbWUgbXVzdCBiZSAxIHRvIDYzIGNoYXJhY3RlcnMgaW4gbGVuZ3RoLCBhbmQgY2FuIGNvbnRhaW4gZGlnaXRzLCBsZXR0ZXJzLCBhbmQgaHlwaGVucyAoLSkuIEl0IGNhbm5vdCBzdGFydCB3aXRoIGEgaHlwaGVuICgtKS5cbiAgICAgKi9cbiAgICByZWFkb25seSBuYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcHJvZmlsZTogVGhlIGlkZW50aWZpZXIgb2YgdGhlIGNsdXN0ZXIuIElmIHlvdSBzZXQgdGhlIGNsdXN0ZXIgdHlwZSB0byBNYW5hZ2VkS3ViZXJuZXRlcywgeW91IGNhbiB1c2UgY2x1c3RlciBpZGVudGlmaWVycyB0byBkaXN0aW5ndWlzaCBjbHVzdGVycy4gVmFsaWQgdmFsdWVzOlxuICAgICAqIERlZmF1bHQ6IG1hbmFnZWQgS3ViZXJuZXRlcyBjbHVzdGVyXG4gICAgICogU2VydmVybGVzczogQVNLIGNsdXN0ZXJcbiAgICAgKiBFZGdlOiBlZGdlIEt1YmVybmV0ZXMgY2x1c3RlclxuICAgICAqIEJ5IGRlZmF1bHQsIHRoaXMgcGFyYW1ldGVyIGlzIGVtcHR5LiBUaGlzIGluZGljYXRlcyB0aGF0IHRoZSBwYXJhbWV0ZXIgaXMgbm90IHVzZWQgdG8gZmlsdGVyIGNsdXN0ZXJzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByb2ZpbGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBEQVRBU09VUkNFOjpDUzo6S3ViZXJuZXRlc0NsdXN0ZXJzYFxuICovXG5leHBvcnQgY2xhc3MgS3ViZXJuZXRlc0NsdXN0ZXJzIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBDbHVzdGVySWRzOiBUaGUgbGlzdCBvZiBjbHVzdGVyIElEcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNsdXN0ZXJJZHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBDbHVzdGVyczogVGhlIGxpc3Qgb2YgY2x1c3RlcnMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDbHVzdGVyczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBEQVRBU09VUkNFOjpDUzo6S3ViZXJuZXRlc0NsdXN0ZXJzYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBLdWJlcm5ldGVzQ2x1c3RlcnNQcm9wcyA9IHt9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0t1YmVybmV0ZXNDbHVzdGVycyA9IG5ldyBSb3NLdWJlcm5ldGVzQ2x1c3RlcnModGhpcywgaWQsICB7XG4gICAgICAgICAgICBjbHVzdGVyU3BlYzogcHJvcHMuY2x1c3RlclNwZWMsXG4gICAgICAgICAgICBjbHVzdGVyVHlwZTogcHJvcHMuY2x1c3RlclR5cGUsXG4gICAgICAgICAgICBwcm9maWxlOiBwcm9wcy5wcm9maWxlLFxuICAgICAgICAgICAgbmFtZTogcHJvcHMubmFtZSxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NLdWJlcm5ldGVzQ2x1c3RlcnM7XG4gICAgICAgIHRoaXMuYXR0ckNsdXN0ZXJJZHMgPSByb3NLdWJlcm5ldGVzQ2x1c3RlcnMuYXR0ckNsdXN0ZXJJZHM7XG4gICAgICAgIHRoaXMuYXR0ckNsdXN0ZXJzID0gcm9zS3ViZXJuZXRlc0NsdXN0ZXJzLmF0dHJDbHVzdGVycztcbiAgICB9XG59XG4iXX0=