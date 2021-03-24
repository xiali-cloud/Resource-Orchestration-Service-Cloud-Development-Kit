using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::SLB::Certificate`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-slb.RosCertificateProps")]
    public class RosCertificateProps : AlibabaCloud.SDK.ROS.CDK.Slb.IRosCertificateProps
    {
        /// <remarks>
        /// <strong>Property</strong>: certificate: The content of the certificate public key.
        /// </remarks>
        [JsiiProperty(name: "certificate", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Certificate
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: aliCloudCertificateId: The ID of the Alibaba Cloud certificate.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "aliCloudCertificateId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? AliCloudCertificateId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: aliCloudCertificateName: The name of the Alibaba Cloud certificate.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "aliCloudCertificateName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? AliCloudCertificateName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: certificateName: The name of the certificate.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "certificateName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? CertificateName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: certificateType: The type of the certificate.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "certificateType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? CertificateType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: privateKey: The private key.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "privateKey", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? PrivateKey
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: Resource group id.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ResourceGroupId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-core.RosTag\"},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public AlibabaCloud.SDK.ROS.CDK.Core.IRosTag[]? Tags
        {
            get;
            set;
        }
    }
}
