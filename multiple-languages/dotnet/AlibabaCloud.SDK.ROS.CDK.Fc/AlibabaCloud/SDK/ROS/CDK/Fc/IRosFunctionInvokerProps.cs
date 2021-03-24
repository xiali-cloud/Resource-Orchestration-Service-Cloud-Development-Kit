using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc
{
    /// <summary>Properties for defining a `ALIYUN::FC::FunctionInvoker`.</summary>
    [JsiiInterface(nativeType: typeof(IRosFunctionInvokerProps), fullyQualifiedName: "@alicloud/ros-cdk-fc.RosFunctionInvokerProps")]
    public interface IRosFunctionInvokerProps
    {
        /// <remarks>
        /// <strong>Property</strong>: functionName: Function name
        /// </remarks>
        [JsiiProperty(name: "functionName", typeJson: "{\"primitive\":\"string\"}")]
        string FunctionName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: serviceName: Service name
        /// </remarks>
        [JsiiProperty(name: "serviceName", typeJson: "{\"primitive\":\"string\"}")]
        string ServiceName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: async: Invocation type, Sync or Async. Defaults to Sync.
        /// </remarks>
        [JsiiProperty(name: "async", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Async
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: checkError: Whether check error for function invocation result.
        /// If set true and function invocation result has error, the resource creation will be regard as failed.
        /// Default is false
        /// </remarks>
        [JsiiProperty(name: "checkError", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CheckError
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: event: This value is passed to function as utf-8 encoded string.It’s function’s responsibility to interpret the value.
        /// If the value needs to be binary, encode it via base64 before passing to this property.
        /// </remarks>
        [JsiiProperty(name: "event", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Event
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: executeVersion: If the property is not specified for creation and update, the function will not be invoked. The change of the property leads to the invoke of the function.
        /// </remarks>
        [JsiiProperty(name: "executeVersion", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? ExecuteVersion
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: qualifier: service version, can be versionId or aliasName
        /// </remarks>
        [JsiiProperty(name: "qualifier", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Qualifier
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: serviceRegionId: Which region service belongs to.
        /// </remarks>
        [JsiiProperty(name: "serviceRegionId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ServiceRegionId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::FC::FunctionInvoker`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosFunctionInvokerProps), fullyQualifiedName: "@alicloud/ros-cdk-fc.RosFunctionInvokerProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fc.IRosFunctionInvokerProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: functionName: Function name
            /// </remarks>
            [JsiiProperty(name: "functionName", typeJson: "{\"primitive\":\"string\"}")]
            public string FunctionName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceName: Service name
            /// </remarks>
            [JsiiProperty(name: "serviceName", typeJson: "{\"primitive\":\"string\"}")]
            public string ServiceName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: async: Invocation type, Sync or Async. Defaults to Sync.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "async", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Async
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: checkError: Whether check error for function invocation result.
            /// If set true and function invocation result has error, the resource creation will be regard as failed.
            /// Default is false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "checkError", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CheckError
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: event: This value is passed to function as utf-8 encoded string.It’s function’s responsibility to interpret the value.
            /// If the value needs to be binary, encode it via base64 before passing to this property.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "event", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Event
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: executeVersion: If the property is not specified for creation and update, the function will not be invoked. The change of the property leads to the invoke of the function.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "executeVersion", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? ExecuteVersion
            {
                get => GetInstanceProperty<double?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: qualifier: service version, can be versionId or aliasName
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "qualifier", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Qualifier
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceRegionId: Which region service belongs to.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "serviceRegionId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ServiceRegionId
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
