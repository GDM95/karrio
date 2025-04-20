from karrio.core.metadata import Metadata

from karrio.mappers.laposte.mapper import Mapper
from karrio.mappers.laposte.proxy import Proxy
from karrio.mappers.laposte.settings import Settings
import karrio.providers.laposte.units as units


METADATA = Metadata(
    status="production-ready",
    id="laposte",
    label="La Poste",
    # Integrations
    Mapper=Mapper,
    Proxy=Proxy,
    Settings=Settings,
    # Data Units
    is_hub=False,
    # New fields
    website="https://www.laposte.fr/",
    documentation="https://www.lapostegroupe.com/en/services-mail-parcels-business-unit",
    description="La Poste is a postal service company in France, operating in Metropolitan France and French overseas territories. The company provides mail delivery, parcel shipping, banking services, and digital solutions.",
)
