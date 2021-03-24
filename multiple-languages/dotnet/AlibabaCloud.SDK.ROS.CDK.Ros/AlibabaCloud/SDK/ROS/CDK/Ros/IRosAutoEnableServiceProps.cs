using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ros
{
    /// <summary>Properties for defining a `ALIYUN::ROS::AutoEnableService`.</summary>
    [JsiiInterface(nativeType: typeof(IRosAutoEnableServiceProps), fullyQualifiedName: "@alicloud/ros-cdk-ros.RosAutoEnableServiceProps")]
    public interface IRosAutoEnableServiceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: serviceName: Which service to enable. Valid values:
        /// AHAS: Application High Availability Service
        /// ARMS: Realtime Monitoring Service
        /// ApiGateway: API Gateway
        /// BatchCompute: Batch Compute
        /// BrainIndustrial: Brain Industrial
        /// CMS: Cloud Monitor Service
        /// CR: Container Registry
        /// CS: Container Service
        /// DataHub: Data Hub
        /// DCDN: Dynamic Route for CDN
        /// EMAS: Enterprise Mobile Application Studio
        /// FC: Function Compute
        /// FNF: Serverless Workflow
        /// MaxCompute: MaxComputeNAS: Network Attached Storage
        /// MNS: Message Service (MNS)
        /// HBR: Hybrid Backup Recovery
        /// IMM: Intelligent Media Management
        /// IOT: IoT Platform
        /// KMS: Key Management Service
        /// NLP: Natural Language Processing
        /// OSS: Object Storage Service
        /// OTS: Table Store
        /// PrivateLink: Private Link
        /// PrivateZone: Private Zone
        /// RocketMQ: RocketMQ
        /// SLS: Log Service
        /// VS: Video Surveillance
        /// Xtrace: Tracing Anlaysis
        /// </remarks>
        [JsiiProperty(name: "serviceName", typeJson: "{\"primitive\":\"string\"}")]
        string ServiceName
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::ROS::AutoEnableService`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosAutoEnableServiceProps), fullyQualifiedName: "@alicloud/ros-cdk-ros.RosAutoEnableServiceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ros.IRosAutoEnableServiceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceName: Which service to enable. Valid values:
            /// AHAS: Application High Availability Service
            /// ARMS: Realtime Monitoring Service
            /// ApiGateway: API Gateway
            /// BatchCompute: Batch Compute
            /// BrainIndustrial: Brain Industrial
            /// CMS: Cloud Monitor Service
            /// CR: Container Registry
            /// CS: Container Service
            /// DataHub: Data Hub
            /// DCDN: Dynamic Route for CDN
            /// EMAS: Enterprise Mobile Application Studio
            /// FC: Function Compute
            /// FNF: Serverless Workflow
            /// MaxCompute: MaxComputeNAS: Network Attached Storage
            /// MNS: Message Service (MNS)
            /// HBR: Hybrid Backup Recovery
            /// IMM: Intelligent Media Management
            /// IOT: IoT Platform
            /// KMS: Key Management Service
            /// NLP: Natural Language Processing
            /// OSS: Object Storage Service
            /// OTS: Table Store
            /// PrivateLink: Private Link
            /// PrivateZone: Private Zone
            /// RocketMQ: RocketMQ
            /// SLS: Log Service
            /// VS: Video Surveillance
            /// Xtrace: Tracing Anlaysis
            /// </remarks>
            [JsiiProperty(name: "serviceName", typeJson: "{\"primitive\":\"string\"}")]
            public string ServiceName
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
