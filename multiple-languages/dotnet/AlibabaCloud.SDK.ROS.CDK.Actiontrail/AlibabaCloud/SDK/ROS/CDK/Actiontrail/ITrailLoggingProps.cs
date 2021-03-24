using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Actiontrail
{
    /// <summary>Properties for defining a `ALIYUN::ACTIONTRAIL::TrailLogging`.</summary>
    [JsiiInterface(nativeType: typeof(ITrailLoggingProps), fullyQualifiedName: "@alicloud/ros-cdk-actiontrail.TrailLoggingProps")]
    public interface ITrailLoggingProps
    {
        /// <summary>Property enable: Whether to enable the trail logging.</summary>
        [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Enable
        {
            get;
        }

        /// <summary>Property name: The name of the trail to be enabled.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
        string Name
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::ACTIONTRAIL::TrailLogging`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ITrailLoggingProps), fullyQualifiedName: "@alicloud/ros-cdk-actiontrail.TrailLoggingProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Actiontrail.ITrailLoggingProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property enable: Whether to enable the trail logging.</summary>
            [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Enable
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property name: The name of the trail to be enabled.</summary>
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
            public string Name
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
