"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CopyImage = exports.CopyImageProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ecs_generated_1 = require("./ecs.generated");
Object.defineProperty(exports, "CopyImageProperty", { enumerable: true, get: function () { return ecs_generated_1.RosCopyImage; } });
/**
 * A ROS resource type:  `ALIYUN::ECS::CopyImage`
 */
class CopyImage extends ros.Resource {
    /**
     * Create a new `ALIYUN::ECS::CopyImage`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosCopyImage = new ecs_generated_1.RosCopyImage(this, id, {
            sourceRegionId: props.sourceRegionId,
            kmsKeyId: props.kmsKeyId,
            destinationRegionId: props.destinationRegionId,
            encrypted: props.encrypted,
            imageId: props.imageId,
            destinationDescription: props.destinationDescription,
            tag: props.tag,
            destinationImageName: props.destinationImageName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCopyImage;
        this.attrDestinationRegionId = rosCopyImage.attrDestinationRegionId;
        this.attrImageId = rosCopyImage.attrImageId;
        this.attrSourceRegionId = rosCopyImage.attrSourceRegionId;
    }
}
exports.CopyImage = CopyImage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29weWltYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29weWltYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBK0M7QUFFdEIsa0dBRmhCLDRCQUFZLE9BRXFCO0FBZ0QxQzs7R0FFRztBQUNILE1BQWEsU0FBVSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBc0J2Qzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXFCLEVBQUUsbUNBQTJDLElBQUk7UUFDaEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLFlBQVksR0FBRyxJQUFJLDRCQUFZLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUM3QyxjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7WUFDcEMsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxtQkFBbUI7WUFDOUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixzQkFBc0IsRUFBRSxLQUFLLENBQUMsc0JBQXNCO1lBQ3BELEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRztZQUNkLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxvQkFBb0I7U0FDbkQsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUM7UUFDN0IsSUFBSSxDQUFDLHVCQUF1QixHQUFHLFlBQVksQ0FBQyx1QkFBdUIsQ0FBQztRQUNwRSxJQUFJLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQyxXQUFXLENBQUM7UUFDNUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQztJQUM5RCxDQUFDO0NBQ0o7QUEvQ0QsOEJBK0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zQ29weUltYWdlIH0gZnJvbSAnLi9lY3MuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zQ29weUltYWdlIGFzIENvcHlJbWFnZVByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpFQ1M6OkNvcHlJbWFnZWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDb3B5SW1hZ2VQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZXN0aW5hdGlvblJlZ2lvbklkOiBJRCBvZiB0aGUgcmVnaW9uIHRvIHdoZXJlIHRoZSBkZXN0aW5hdGlvbiBjdXN0b20gaW1hZ2UgYmVsb25ncy5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXN0aW5hdGlvblJlZ2lvbklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbWFnZUlkOiBJRCBvZiB0aGUgc291cmNlIGN1c3RvbSBpbWFnZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbWFnZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZXN0aW5hdGlvbkRlc2NyaXB0aW9uOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIGRlc3RpbmF0aW9uIGN1c3RvbSBpbWFnZS5JdCBjYW5ub3QgYmVnaW4gd2l0aCBodHRwOi8vIG9yIGh0dHBzOi8vLiAgRGVmYXVsdCB2YWx1ZTogbnVsbC5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXN0aW5hdGlvbkRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVzdGluYXRpb25JbWFnZU5hbWU6IE5hbWUgb2YgdGhlIGRlc3RpbmF0aW9uIGN1c3RvbSBpbWFnZS5UaGUgbmFtZSBpcyBhIHN0cmluZyBvZiAyIHRvIDEyOCBjaGFyYWN0ZXJzLiBJdCBtdXN0IGJlZ2luIHdpdGggYW4gRW5nbGlzaCBvciBhIENoaW5lc2UgY2hhcmFjdGVyLiBJdCBjYW4gY29udGFpbiBBLVosIGEteiwgQ2hpbmVzZSBjaGFyYWN0ZXJzLCBudW1iZXJzLCBwZXJpb2RzICguKSwgY29sb25zICg6KSwgdW5kZXJzY29yZXMgKF8pLCBhbmQgaHlwaGVucyAoLSkuICBEZWZhdWx0IHZhbHVlOiBudWxsLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc3RpbmF0aW9uSW1hZ2VOYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZW5jcnlwdGVkOiBXaGV0aGVyIHRvIGVuY3J5cHQgdGhlIGltYWdlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVuY3J5cHRlZD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBrbXNLZXlJZDogVGhlIElEIG9mIHRoZSBrZXkgdXNlZCB0byBlbmNyeXB0IHRoZSBpbWFnZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBrbXNLZXlJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNvdXJjZVJlZ2lvbklkOiBJRCBvZiB0aGUgcmVnaW9uIHRvIHdoZXJlIHRoZSBzb3VyY2UgaW1hZ2UgYmVsb25ncy4gRGVmYXVsdCBpcyBjdXJyZW50IHJlZ2lvbiBJRC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzb3VyY2VSZWdpb25JZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRhZzpcbiAgICAgKi9cbiAgICByZWFkb25seSB0YWc/OiBBcnJheTxyb3MuUm9zVGFnIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6RUNTOjpDb3B5SW1hZ2VgXG4gKi9cbmV4cG9ydCBjbGFzcyBDb3B5SW1hZ2UgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIERlc3RpbmF0aW9uUmVnaW9uSWQ6IElEIG9mIHRoZSByZWdpb24gdG8gd2hlcmUgdGhlIGRlc3RpbmF0aW9uIGN1c3RvbSBpbWFnZSBiZWxvbmdzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGVzdGluYXRpb25SZWdpb25JZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEltYWdlSWQ6IElEIG9mIHRoZSBzb3VyY2UgY3VzdG9tIGltYWdlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW1hZ2VJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFNvdXJjZVJlZ2lvbklkOiBJRCBvZiB0aGUgcmVnaW9uIHRvIHdoZXJlIHRoZSBzb3VyY2UgaW1hZ2UgYmVsb25ncy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNvdXJjZVJlZ2lvbklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6RUNTOjpDb3B5SW1hZ2VgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IENvcHlJbWFnZVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0NvcHlJbWFnZSA9IG5ldyBSb3NDb3B5SW1hZ2UodGhpcywgaWQsICB7XG4gICAgICAgICAgICBzb3VyY2VSZWdpb25JZDogcHJvcHMuc291cmNlUmVnaW9uSWQsXG4gICAgICAgICAgICBrbXNLZXlJZDogcHJvcHMua21zS2V5SWQsXG4gICAgICAgICAgICBkZXN0aW5hdGlvblJlZ2lvbklkOiBwcm9wcy5kZXN0aW5hdGlvblJlZ2lvbklkLFxuICAgICAgICAgICAgZW5jcnlwdGVkOiBwcm9wcy5lbmNyeXB0ZWQsXG4gICAgICAgICAgICBpbWFnZUlkOiBwcm9wcy5pbWFnZUlkLFxuICAgICAgICAgICAgZGVzdGluYXRpb25EZXNjcmlwdGlvbjogcHJvcHMuZGVzdGluYXRpb25EZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHRhZzogcHJvcHMudGFnLFxuICAgICAgICAgICAgZGVzdGluYXRpb25JbWFnZU5hbWU6IHByb3BzLmRlc3RpbmF0aW9uSW1hZ2VOYW1lLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0NvcHlJbWFnZTtcbiAgICAgICAgdGhpcy5hdHRyRGVzdGluYXRpb25SZWdpb25JZCA9IHJvc0NvcHlJbWFnZS5hdHRyRGVzdGluYXRpb25SZWdpb25JZDtcbiAgICAgICAgdGhpcy5hdHRySW1hZ2VJZCA9IHJvc0NvcHlJbWFnZS5hdHRySW1hZ2VJZDtcbiAgICAgICAgdGhpcy5hdHRyU291cmNlUmVnaW9uSWQgPSByb3NDb3B5SW1hZ2UuYXR0clNvdXJjZVJlZ2lvbklkO1xuICAgIH1cbn1cbiJdfQ==