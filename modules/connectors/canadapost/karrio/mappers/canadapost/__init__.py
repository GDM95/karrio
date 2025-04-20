from karrio.core.metadata import Metadata

from karrio.mappers.canadapost.mapper import Mapper
from karrio.mappers.canadapost.proxy import Proxy
from karrio.mappers.canadapost.settings import Settings
import karrio.providers.canadapost.units as units


METADATA = Metadata(
    status="production-ready",
    id="canadapost",
    label="Canada Post",
    # Integrations
    Mapper=Mapper,
    Proxy=Proxy,
    Settings=Settings,
    # Data Units
    options=units.ShippingOption,
    package_presets=units.PackagePresets,
    services=units.ServiceType,
    connection_configs=units.ConnectionConfig,
    # New fields
    website="https://www.canadapost-postescanada.ca/cpc/en/home.page",
    documentation="https://www.canadapost-postescanada.ca/information/app/drc/home",
    description="Mailing and shipping for Personal and Business.",
)
