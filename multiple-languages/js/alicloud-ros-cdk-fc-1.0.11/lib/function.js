"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Function = exports.FunctionProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const fc_generated_1 = require("./fc.generated");
Object.defineProperty(exports, "FunctionProperty", { enumerable: true, get: function () { return fc_generated_1.RosFunction; } });
/**
 * A ROS resource type:  `ALIYUN::FC::Function`
 */
class Function extends ros.Resource {
    /**
     * Create a new `ALIYUN::FC::Function`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosFunction = new fc_generated_1.RosFunction(this, id, {
            memorySize: props.memorySize === undefined || props.memorySize === null ? 128 : props.memorySize,
            description: props.description,
            timeout: props.timeout === undefined || props.timeout === null ? 3 : props.timeout,
            handler: props.handler,
            customContainerConfig: props.customContainerConfig,
            code: props.code,
            asyncConfiguration: props.asyncConfiguration,
            caPort: props.caPort === undefined || props.caPort === null ? 9000 : props.caPort,
            functionName: props.functionName,
            runtime: props.runtime,
            environmentVariables: props.environmentVariables,
            initializer: props.initializer,
            initializationTimeout: props.initializationTimeout,
            serviceName: props.serviceName,
            instanceConcurrency: props.instanceConcurrency,
            instanceType: props.instanceType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosFunction;
        this.attrArn = rosFunction.attrArn;
        this.attrFunctionId = rosFunction.attrFunctionId;
        this.attrFunctionName = rosFunction.attrFunctionName;
        this.attrServiceId = rosFunction.attrServiceId;
        this.attrServiceName = rosFunction.attrServiceName;
    }
}
exports.Function = Function;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmdW5jdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsaURBQTZDO0FBRXJCLGlHQUZmLDBCQUFXLE9BRW9CO0FBd0Z4Qzs7R0FFRztBQUNILE1BQWEsUUFBUyxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBZ0N0Qzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQW9CLEVBQUUsbUNBQTJDLElBQUk7UUFDL0csS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLFdBQVcsR0FBRyxJQUFJLDBCQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUMzQyxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVUsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLFVBQVUsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVU7WUFDaEcsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTztZQUNsRixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIscUJBQXFCLEVBQUUsS0FBSyxDQUFDLHFCQUFxQjtZQUNsRCxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7WUFDaEIsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQjtZQUM1QyxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU07WUFDakYsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1lBQ2hDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixvQkFBb0IsRUFBRSxLQUFLLENBQUMsb0JBQW9CO1lBQ2hELFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixxQkFBcUIsRUFBRSxLQUFLLENBQUMscUJBQXFCO1lBQ2xELFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixtQkFBbUIsRUFBRSxLQUFLLENBQUMsbUJBQW1CO1lBQzlDLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtTQUNuQyxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUM7UUFDbkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxXQUFXLENBQUMsY0FBYyxDQUFDO1FBQ2pELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxXQUFXLENBQUMsZ0JBQWdCLENBQUM7UUFDckQsSUFBSSxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUMsYUFBYSxDQUFDO1FBQy9DLElBQUksQ0FBQyxlQUFlLEdBQUcsV0FBVyxDQUFDLGVBQWUsQ0FBQztJQUN2RCxDQUFDO0NBQ0o7QUFuRUQsNEJBbUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zRnVuY3Rpb24gfSBmcm9tICcuL2ZjLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0Z1bmN0aW9uIGFzIEZ1bmN0aW9uUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkZDOjpGdW5jdGlvbmBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBGdW5jdGlvblByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGZ1bmN0aW9uTmFtZTogRnVuY3Rpb24gbmFtZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGZ1bmN0aW9uTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaGFuZGxlcjogVGhlIGZ1bmN0aW9uIGV4ZWN1dGlvbiBlbnRyeSBwb2ludC5cbiAgICAgKi9cbiAgICByZWFkb25seSBoYW5kbGVyOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBydW50aW1lOiBUaGUgZnVuY3Rpb24gcnVudGltZSBlbnZpcm9ubWVudC4gU3VwcG9ydGluZyBub2RlanM2LCBub2RlanM4LCBub2RlanMxMCwgbm9kZWpzMTIsIHB5dGhvbjIuNywgcHl0aG9uMywgamF2YTgsIGN1c3RvbSwgY3VzdG9tLWNvbnRhaW5lciBhbmQgc28gb25cbiAgICAgKi9cbiAgICByZWFkb25seSBydW50aW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzZXJ2aWNlTmFtZTogU2VydmljZSBuYW1lXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2VydmljZU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGFzeW5jQ29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbiBvZiBhc3luY2hyb25vdXMgZnVuY3Rpb24gY2FsbHNcbiAgICAgKi9cbiAgICByZWFkb25seSBhc3luY0NvbmZpZ3VyYXRpb24/OiBSb3NGdW5jdGlvbi5Bc3luY0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNhUG9ydDogQ3VzdG9tIHJ1bnRpbWUgYW5kIGN1c3RvbSBjb250YWluZXIgcnVudGltZSBkZWRpY2F0ZWQgZmllbGRzLCB3aGljaCByZXByZXNlbnQgdGhlIHBvcnQgdGhhdCB0aGUgc3RhcnRlZCBjdXN0b20gaHR0cCBzZXJ2ZXIgbGlzdGVucyB0by4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgOTAwMFxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNhUG9ydD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNvZGU6IFRoZSBjb2RlIHRoYXQgY29udGFpbnMgdGhlIGZ1bmN0aW9uIGltcGxlbWVudGF0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNvZGU/OiBSb3NGdW5jdGlvbi5Db2RlUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjdXN0b21Db250YWluZXJDb25maWc6IEN1c3RvbSBjb250YWluZXIgcnVudGltZSByZWxhdGVkIGNvbmZpZ3VyYXRpb24uIEFmdGVyIGNvbmZpZ3VyYXRpb24sIHRoZSBmdW5jdGlvbiBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIGN1c3RvbSBjb250YWluZXIgdG8gZXhlY3V0ZSB0aGUgZnVuY3Rpb25cbiAgICAgKi9cbiAgICByZWFkb25seSBjdXN0b21Db250YWluZXJDb25maWc/OiBSb3NGdW5jdGlvbi5DdXN0b21Db250YWluZXJDb25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRlc2NyaXB0aW9uOiBGdW5jdGlvbiBkZXNjcmlwdGlvblxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZW52aXJvbm1lbnRWYXJpYWJsZXM6IFRoZSBlbnZpcm9ubWVudCB2YXJpYWJsZSBzZXQgZm9yIHRoZSBmdW5jdGlvbiwgeW91IGNhbiBnZXQgdGhlIHZhbHVlIG9mIHRoZSBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbiB0aGUgZnVuY3Rpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW52aXJvbm1lbnRWYXJpYWJsZXM/OiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbml0aWFsaXphdGlvblRpbWVvdXQ6IHRoZSBtYXggZXhlY3V0aW9uIHRpbWUgb2YgdGhlIGluaXRpYWxpemVyLCBpbiBzZWNvbmRcbiAgICAgKi9cbiAgICByZWFkb25seSBpbml0aWFsaXphdGlvblRpbWVvdXQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbml0aWFsaXplcjogdGhlIGVudHJ5IHBvaW50IG9mIHRoZSBpbml0aWFsaXplclxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluaXRpYWxpemVyPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW5zdGFuY2VDb25jdXJyZW5jeTogRnVuY3Rpb24gaW5zdGFuY2UgY29uY3VycmVuY3kuIFZhbHVlIGNhbiBiZSBiZXR3ZWVuIDEgdG8gMTAwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlQ29uY3VycmVuY3k/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbnN0YW5jZVR5cGU6IEluc3RhbmNlIHR5cGUuIFZhbHVlOmUxOiBmbGV4aWJsZSBpbnN0YW5jZS4gTWVtb3J5IHNpemUgYmV0d2VlbiAxMjggYW5kIDMwNzJjMTogcGVyZm9ybWFuY2UgaW5zdGFuY2UuIE1lbW9yeSBzaXplIGFsbG93IHZhbHVlcyBhcmUgNDA5NiwgODE5MiwgMTYzODQgYW5kIDMyNzY4XG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbWVtb3J5U2l6ZTogVGhlIGFtb3VudCBvZiBtZW1vcnkgdGhhdOKAmXMgdXNlZCB0byBydW4gZnVuY3Rpb24sIGluIE1CLiBGdW5jdGlvbiBDb21wdXRlIHVzZXMgdGhpcyB2YWx1ZSB0byBhbGxvY2F0ZSBDUFUgcmVzb3VyY2VzIHByb3BvcnRpb25hbGx5LiBEZWZhdWx0cyB0byAxMjggTUIuIEl0IGNhbiBiZSBtdWx0aXBsZSBvZiA2NCBNQiBhbmQgYmV0d2VlbiAxMjggTUIgYW5kIDMwNzIgTUIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbWVtb3J5U2l6ZT86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRpbWVvdXQ6IFRoZSBtYXhpbXVtIHRpbWUgZHVyYXRpb24gYSBmdW5jdGlvbiBjYW4gcnVuLCBpbiBzZWNvbmRzLiBBZnRlciB3aGljaCBGdW5jdGlvbiBDb21wdXRlIHRlcm1pbmF0ZXMgdGhlIGV4ZWN1dGlvbi4gRGVmYXVsdHMgdG8gMyBzZWNvbmRzLCBhbmQgY2FuIGJlIGJldHdlZW4gMSB0byA4NjQwMCBzZWNvbmRzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRpbWVvdXQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OkZDOjpGdW5jdGlvbmBcbiAqL1xuZXhwb3J0IGNsYXNzIEZ1bmN0aW9uIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBBUk46IFRoZSBBUk4gZm9yIEFMSVlVTjo6Uk9TOjpDdXN0b21SZXNvdXJjZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQXJuOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRnVuY3Rpb25JZDogVGhlIGZ1bmN0aW9uIElEXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJGdW5jdGlvbklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRnVuY3Rpb25OYW1lOiBUaGUgZnVuY3Rpb24gbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRnVuY3Rpb25OYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgU2VydmljZUlkOiBUaGUgc2VydmljZSBJRFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU2VydmljZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgU2VydmljZU5hbWU6IFRoZSBzZXJ2aWNlIG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNlcnZpY2VOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6RkM6OkZ1bmN0aW9uYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBGdW5jdGlvblByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0Z1bmN0aW9uID0gbmV3IFJvc0Z1bmN0aW9uKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgbWVtb3J5U2l6ZTogcHJvcHMubWVtb3J5U2l6ZSA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLm1lbW9yeVNpemUgPT09IG51bGwgPyAxMjggOiBwcm9wcy5tZW1vcnlTaXplLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHByb3BzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdGltZW91dDogcHJvcHMudGltZW91dCA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLnRpbWVvdXQgPT09IG51bGwgPyAzIDogcHJvcHMudGltZW91dCxcbiAgICAgICAgICAgIGhhbmRsZXI6IHByb3BzLmhhbmRsZXIsXG4gICAgICAgICAgICBjdXN0b21Db250YWluZXJDb25maWc6IHByb3BzLmN1c3RvbUNvbnRhaW5lckNvbmZpZyxcbiAgICAgICAgICAgIGNvZGU6IHByb3BzLmNvZGUsXG4gICAgICAgICAgICBhc3luY0NvbmZpZ3VyYXRpb246IHByb3BzLmFzeW5jQ29uZmlndXJhdGlvbixcbiAgICAgICAgICAgIGNhUG9ydDogcHJvcHMuY2FQb3J0ID09PSB1bmRlZmluZWQgfHwgcHJvcHMuY2FQb3J0ID09PSBudWxsID8gOTAwMCA6IHByb3BzLmNhUG9ydCxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcHJvcHMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgcnVudGltZTogcHJvcHMucnVudGltZSxcbiAgICAgICAgICAgIGVudmlyb25tZW50VmFyaWFibGVzOiBwcm9wcy5lbnZpcm9ubWVudFZhcmlhYmxlcyxcbiAgICAgICAgICAgIGluaXRpYWxpemVyOiBwcm9wcy5pbml0aWFsaXplcixcbiAgICAgICAgICAgIGluaXRpYWxpemF0aW9uVGltZW91dDogcHJvcHMuaW5pdGlhbGl6YXRpb25UaW1lb3V0LFxuICAgICAgICAgICAgc2VydmljZU5hbWU6IHByb3BzLnNlcnZpY2VOYW1lLFxuICAgICAgICAgICAgaW5zdGFuY2VDb25jdXJyZW5jeTogcHJvcHMuaW5zdGFuY2VDb25jdXJyZW5jeSxcbiAgICAgICAgICAgIGluc3RhbmNlVHlwZTogcHJvcHMuaW5zdGFuY2VUeXBlLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0Z1bmN0aW9uO1xuICAgICAgICB0aGlzLmF0dHJBcm4gPSByb3NGdW5jdGlvbi5hdHRyQXJuO1xuICAgICAgICB0aGlzLmF0dHJGdW5jdGlvbklkID0gcm9zRnVuY3Rpb24uYXR0ckZ1bmN0aW9uSWQ7XG4gICAgICAgIHRoaXMuYXR0ckZ1bmN0aW9uTmFtZSA9IHJvc0Z1bmN0aW9uLmF0dHJGdW5jdGlvbk5hbWU7XG4gICAgICAgIHRoaXMuYXR0clNlcnZpY2VJZCA9IHJvc0Z1bmN0aW9uLmF0dHJTZXJ2aWNlSWQ7XG4gICAgICAgIHRoaXMuYXR0clNlcnZpY2VOYW1lID0gcm9zRnVuY3Rpb24uYXR0clNlcnZpY2VOYW1lO1xuICAgIH1cbn1cbiJdfQ==